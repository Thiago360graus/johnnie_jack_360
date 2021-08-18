(function(){
    var script = {
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "start": "this.playAudioList([this.audio_0993778A_1DC1_8066_41AA_341608237604]); this.init()",
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "definitions": [{
 "thumbnailUrl": "media/video_02DD7427_1F37_B477_41B7_65C40F330FB3_t.jpg",
 "scaleMode": "fit_inside",
 "width": 720,
 "label": "JJ (2)",
 "loop": false,
 "id": "video_02DD7427_1F37_B477_41B7_65C40F330FB3",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_02DD7427_1F37_B477_41B7_65C40F330FB3.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 4.59,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B6590D3_582F_A641_418E_A727B59BE34C",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F",
   "start": "this.viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_48890B70_5815_BA5F_41C1_207B08C79128, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_48890B70_5815_BA5F_41C1_207B08C79128, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4VideoPlayer)",
   "player": "this.viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4VideoPlayer"
  }
 ],
 "id": "playList_48890B70_5815_BA5F_41C1_207B08C79128",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B2620A4_582F_A6C7_41D4_177DAA3B10B6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -9.18
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B0C20C3_582F_A641_41CF_7E609B386EFE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BA10102_582F_A7C3_41A7_75D40D264294",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "001...LEG",
 "hfovMin": "150%",
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
 "overlays": [
  "this.overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
  "this.overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_049547FB_1F37_B3DF_41BB_2A71C7F926F4_t.jpg",
 "scaleMode": "fit_inside",
 "width": 720,
 "label": "JJ (4)",
 "loop": false,
 "id": "video_049547FB_1F37_B3DF_41BB_2A71C7F926F4",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_049547FB_1F37_B3DF_41BB_2A71C7F926F4.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "004 copiar",
 "hfovMin": "150%",
 "id": "panorama_167546D9_055B_9607_417E_841620224C88",
 "overlays": [
  "this.panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
  "this.overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
  "this.overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
  "this.overlay_11C844E8_1C40_81A3_41BD_135085A6CD77"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 77.14,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B0130B4_582F_A6C7_41D1_0586BDA39B68",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_05F07538_1F39_B459_41A6_C3867706CB19",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4AC45085_582F_A6C1_41C3_E78CCD62FA18, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4AC45085_582F_A6C1_41C3_E78CCD62FA18, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_4AC45085_582F_A6C1_41C3_E78CCD62FA18",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BFDC131_582F_A7C1_41B2_6962AC455F88",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B4660F2_582F_A643_41C8_B9C6E30536A5",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "id": "window_4A6A9D8C_582D_5EC7_41D3_AC34ADED7345",
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [],
 "overflow": "scroll",
 "closeButtonBackgroundColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "headerBorderColor": "#000000",
 "propagateClick": false,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "class": "Window",
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "titleFontWeight": "normal",
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 1,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 0,
 "children": [
  "this.viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "closeButtonBorderSize": 2,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundOpacity": 1,
 "gap": 10,
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 0,
 "paddingTop": 0,
 "bodyPaddingRight": 0,
 "paddingBottom": 0,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window5825"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 0,
 "from": "right",
 "id": "effect_671F5FB9_05AA_B607_4186_4F9D961227F2",
 "class": "SlideInEffect",
 "easing": "linear"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_706911C3_05BA_EA04_4193_07910AFBC595",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "to": "left",
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.video_04D7D61C_1F37_B459_41B4_9025DA67A495",
   "start": "this.viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_48932B70_5815_BA5F_41D5_DA222B454B16, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_48932B70_5815_BA5F_41D5_DA222B454B16, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8VideoPlayer)",
   "player": "this.viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8VideoPlayer"
  }
 ],
 "id": "playList_48932B70_5815_BA5F_41D5_DA222B454B16",
 "class": "PlayList"
},
{
 "displayOriginPosition": {
  "yaw": -4.27,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -4.27,
  "class": "PanoramaCameraPosition",
  "pitch": -3.53
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -3.53,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "duration": 400,
 "from": "left",
 "id": "effect_6AAC9764_05BF_960D_4167_B79BED30937C",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "titleFontColor": "#000000",
 "id": "window_228FC079_2D3E_5DDD_41C1_D8CEC58BC90C",
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [],
 "overflow": "scroll",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "headerBorderColor": "#000000",
 "propagateClick": false,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "height": 600,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 0,
 "children": [
  "this.viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundOpacity": 1,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 0,
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 0,
 "bodyPaddingRight": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window6465"
 }
},
{
 "thumbnailUrl": "media/video_4A3A7878_582D_A64F_41CE_73B1447DE0D8_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1152,
 "label": "239059012_906659693264795_6307645144544825689_n",
 "loop": false,
 "id": "video_4A3A7878_582D_A64F_41CE_73B1447DE0D8",
 "class": "Video",
 "height": 648,
 "video": {
  "width": 1152,
  "mp4Url": "media/video_4A3A7878_582D_A64F_41CE_73B1447DE0D8.mp4",
  "class": "VideoResource",
  "height": 648
 }
},
{
 "thumbnailUrl": "media/video_05CB1B88_1F37_BC38_41B6_BCEB8034714E_t.jpg",
 "scaleMode": "fit_inside",
 "width": 720,
 "label": "JJ (6)",
 "loop": false,
 "id": "video_05CB1B88_1F37_BC38_41B6_BCEB8034714E",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_05CB1B88_1F37_BC38_41B6_BCEB8034714E.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "008",
 "hfovMin": "150%",
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
 "overlays": [
  "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
  "this.overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
  "this.overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
  "this.overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51",
  "this.overlay_11602292_1C40_8067_41BB_2E6F1F452D7E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "009 copiar",
 "hfovMin": "150%",
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218",
 "overlays": [
  "this.panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
  "this.overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
  "this.overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
  "this.overlay_1898879C_05E6_F63D_4170_66ECE8880613",
  "this.overlay_19A5772E_05E6_B61C_415F_7028C1939683",
  "this.overlay_11D2095E_1C41_809F_41B8_C294BD237B79",
  "this.overlay_11CF4C1F_1C41_809D_41BE_3FF96C7D50B9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "006",
 "hfovMin": "150%",
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
 "overlays": [
  "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
  "this.overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
  "this.overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
  "this.overlay_11D14F06_1C40_806F_41A5_E686DA55E819",
  "this.overlay_11C7B8B0_1C41_81A3_41B3_78D1EDBFEF2C",
  "this.overlay_11315F1B_1C41_8065_41BC_97C4A090EED6",
  "this.overlay_57EB1A53_582E_DA41_41C4_44C8BDB404AB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "010",
 "hfovMin": "150%",
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
 "overlays": [
  "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
  "this.overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
  "this.overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "011 copiar",
 "hfovMin": "150%",
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
 "overlays": [
  "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
  "this.overlay_1978731D_05E5_6E3F_4191_617BBE176123",
  "this.overlay_1AF25F56_05E5_960C_417A_214619834776",
  "this.overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
  "this.overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_045309E1_1F37_BFE8_4163_9893FF0D9E0A_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "label": "JJ (5)",
 "loop": false,
 "id": "video_045309E1_1F37_BFE8_4163_9893FF0D9E0A",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 640,
  "mp4Url": "media/video_045309E1_1F37_BFE8_4163_9893FF0D9E0A.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "titleFontColor": "#000000",
 "id": "window_3C1B182C_2D3A_ED7A_41A9_F3095186711B",
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonIconHeight": 40,
 "closeButtonRollOverBackgroundColor": [],
 "overflow": "scroll",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "headerBorderColor": "#000000",
 "propagateClick": false,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "height": 600,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 0,
 "children": [
  "this.viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 40,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundOpacity": 1,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 0,
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 0,
 "bodyPaddingRight": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window4428"
 }
},
{
 "initialPosition": {
  "yaw": 1.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0.59
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera"
  },
  {
   "media": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera"
  },
  {
   "media": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera"
  },
  {
   "media": "this.panorama_167546D9_055B_9607_417E_841620224C88",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_167546D9_055B_9607_417E_841620224C88_camera"
  },
  {
   "media": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera"
  },
  {
   "media": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera"
  },
  {
   "media": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_camera"
  },
  {
   "media": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1675F608_055B_9605_4148_289A093B3218_camera"
  },
  {
   "media": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera"
  },
  {
   "media": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera"
  },
  {
   "media": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera"
  },
  {
   "media": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera"
  },
  {
   "media": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera"
  },
  {
   "media": "this.video_039BD232_1F37_8C69_4198_D62E41B974BF",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_02DD7427_1F37_B477_41B7_65C40F330FB3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_04D7D61C_1F37_B459_41B4_9025DA67A495",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_049547FB_1F37_B3DF_41BB_2A71C7F926F4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_045309E1_1F37_BFE8_4163_9893FF0D9E0A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_05CB1B88_1F37_BC38_41B6_BCEB8034714E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_4A3A7878_582D_A64F_41CE_73B1447DE0D8",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_4A3A7878_582D_A64F_41CE_73B1447DE0D8",
   "start": "this.viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4C55A711_5835_6BC0_41D0_D89C5F5A3DFE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4C55A711_5835_6BC0_41D0_D89C5F5A3DFE, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5VideoPlayer)",
   "player": "this.viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5VideoPlayer"
  }
 ],
 "id": "playList_4C55A711_5835_6BC0_41D0_D89C5F5A3DFE",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -112.96,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B2FD0A4_582F_A6C7_41D2_6BE1FB84FB54",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "002 copiar",
 "hfovMin": "150%",
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0",
 "overlays": [
  "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
  "this.overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
  "this.overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
  "this.overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6",
  "this.overlay_22547FB4_2D3A_236A_41AE_60E51DFB4D36"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_0993778A_1DC1_8066_41AA_341608237604",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0993778A_1DC1_8066_41AA_341608237604.ogg",
  "mp3Url": "media/audio_0993778A_1DC1_8066_41AA_341608237604.mp3"
 },
 "data": {
  "label": "y2mate.com - Chuck Berry  Johnny B Goode Remastered"
 }
},
{
 "titleFontColor": "#000000",
 "id": "window_01383337_1F38_8C57_4150_B7C2A62B59CC",
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonIconHeight": 40,
 "closeButtonRollOverBackgroundColor": [],
 "overflow": "scroll",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "headerBorderColor": "#000000",
 "propagateClick": false,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "height": 600,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 0,
 "children": [
  "this.viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 40,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundOpacity": 1,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 0,
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 0,
 "bodyPaddingRight": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window6249"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.19,
  "class": "PanoramaCameraPosition",
  "pitch": -0.79
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 70.71,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BEF8131_582F_A7C1_4175_B7C9067314DC",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "003 copiar",
 "hfovMin": "150%",
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
 "overlays": [
  "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
  "this.overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
  "this.overlay_132E8F63_05AD_960B_4182_A0BB34998BEF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "label": "DRINKS",
 "loop": false,
 "id": "video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F",
 "class": "Video",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "initialPosition": {
  "yaw": -41.33,
  "class": "PanoramaCameraPosition",
  "pitch": -16.53
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BDE2140_582F_A7BF_41D5_2ECF3661D599",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_039BD232_1F37_8C69_4198_D62E41B974BF_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "label": "JJ (1)",
 "loop": false,
 "id": "video_039BD232_1F37_8C69_4198_D62E41B974BF",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 640,
  "mp4Url": "media/video_039BD232_1F37_8C69_4198_D62E41B974BF.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "initialPosition": {
  "yaw": -89.08,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B79B0D3_582F_A641_41D2_448F871430EE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 86.33,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BCEB150_582F_A65F_41C3_C6D82F57FA55",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 72.55,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4C385150_582F_A65F_41D3_7C452FD6270A",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_05F07538_1F39_B459_41A6_C3867706CB19_t.jpg",
 "scaleMode": "fit_inside",
 "width": 640,
 "label": "JJ (5)",
 "loop": false,
 "id": "video_05F07538_1F39_B459_41A6_C3867706CB19",
 "class": "Video",
 "height": 800,
 "video": {
  "width": 640,
  "mp4Url": "media/video_05F07538_1F39_B459_41A6_C3867706CB19.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "duration": 1100,
 "id": "effect_56EFE123_05DD_AA0B_417A_2772B8D8B446",
 "class": "FadeOutEffect",
 "easing": "quad_in"
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "013",
 "hfovMin": "150%",
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
 "overlays": [
  "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
  "this.overlay_19469E19_05E5_9604_418A_081538C24A34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4C28D15F_582F_A640_41B4_DB1CCAEAADA6",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_02DD7427_1F37_B477_41B7_65C40F330FB3",
   "start": "this.viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_4889CB70_5815_BA5F_41C7_121A51556373, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_4889CB70_5815_BA5F_41C7_121A51556373, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830VideoPlayer)",
   "player": "this.viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830VideoPlayer"
  }
 ],
 "id": "playList_4889CB70_5815_BA5F_41C7_121A51556373",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B834111_582F_A7C0_41B1_3C93DD2ED9FA",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "id": "window_3A907106_2F16_3F36_4187_700F39F99C49",
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonIconHeight": 40,
 "closeButtonRollOverBackgroundColor": [],
 "overflow": "scroll",
 "width": 400,
 "closeButtonBackgroundColorDirection": "horizontal",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "modal": true,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "headerBorderColor": "#000000",
 "propagateClick": false,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "height": 600,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerPaddingLeft": 10,
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerHeight": 5,
 "headerPaddingRight": 0,
 "shadow": true,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [
  0.98
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 0,
 "children": [
  "this.viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "closeButtonPaddingBottom": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "footerBackgroundOpacity": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 40,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonBackgroundOpacity": 1,
 "gap": 10,
 "layout": "vertical",
 "paddingTop": 0,
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 0,
 "bodyPaddingRight": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "data": {
  "name": "Window10826"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "007 copiar",
 "hfovMin": "150%",
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08",
 "overlays": [
  "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
  "this.overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
  "this.overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
  "this.overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
  "this.overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
  "this.overlay_11CCCEEE_1C41_81BF_419E_4996AF0BE249",
  "this.overlay_1134A905_1C41_806D_41B4_6660D1FB3557"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -137.76,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B1AD0B4_582F_A6C7_41B8_BF8120D94B61",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "005 copiar",
 "hfovMin": "150%",
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
 "overlays": [
  "this.panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
  "this.overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
  "this.overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
  "this.overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2",
  "this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784",
  "this.overlay_2393D3A0_2D37_E36B_4197_5AAD17A3B07D",
  "this.overlay_224A2CFD_2D36_26DA_41B5_FDF5133D1587",
  "this.overlay_3C5B1CD3_2F2A_252E_41AC_7A9F8DB86E33",
  "this.overlay_56E40669_581D_6A40_41CA_47A158CD876B",
  "this.overlay_56672530_581B_EFC0_41C1_3D072E085078",
  "this.overlay_56CBEC8D_581A_BEC1_41B0_2813E34D2ADE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 37.65,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B5470E2_582F_A640_41C6_71A126F82A09",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4BB6E0F2_582F_A643_41D3_19D155629437",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "012",
 "hfovMin": "150%",
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
 "overlays": [
  "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
  "this.overlay_195027C2_05E5_F605_4177_4A79943AEFCC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -19.29
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B8DA121_582F_A7C1_41C7_4590D6D80815",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_4B930111_582F_A7C0_41D1_2836BAE1BEC4",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/video_04D7D61C_1F37_B459_41B4_9025DA67A495_t.jpg",
 "scaleMode": "fit_inside",
 "width": 720,
 "label": "JJ (3)",
 "loop": false,
 "id": "video_04D7D61C_1F37_B459_41B4_9025DA67A495",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_04D7D61C_1F37_B459_41B4_9025DA67A495.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "items": [
  {
   "media": "this.video_039BD232_1F37_8C69_4198_D62E41B974BF",
   "start": "this.viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_488EDB70_5815_BA5F_41CB_9DD73A063C6B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_488EDB70_5815_BA5F_41CB_9DD73A063C6B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064VideoPlayer)",
   "player": "this.viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064VideoPlayer"
  }
 ],
 "id": "playList_488EDB70_5815_BA5F_41CB_9DD73A063C6B",
 "class": "PlayList"
},
{
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 327.9,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": "100%",
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderSize": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fill",
 "data": {
  "name": "FUNDO PRETO"
 }
},
{
 "maxHeight": 801,
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "10%",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "8.7%",
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "borderRadius": 0,
 "minHeight": 600,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "middle",
 "bottom": "10.22%",
 "class": "Image",
 "minWidth": 600,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "maxWidth": 1000,
 "data": {
  "name": "TEXTO INICIAL"
 }
},
{
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "9.23%",
 "width": 80,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "3.28%",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "height": 74,
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "horizontalAlign": "center",
 "cursor": "hand",
 "data": {
  "name": "MUTE"
 }
},
{
 "viewerArea": "this.viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4",
 "id": "viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.62,
   "yaw": -19.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_4BB6E0F2_582F_A643_41D3_19D155629437); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EBC3B24_583D_5BC0_41D5_44A81C076980",
   "pitch": -14.64,
   "hfov": 23.62,
   "yaw": -19.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -110.18,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 40.75,
 "bleaching": 0.7,
 "id": "overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.25,
   "yaw": 78.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C, this.camera_4B930111_582F_A7C0_41D1_2836BAE1BEC4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB06B27_583D_5BC0_4191_7ABAD634572D",
   "pitch": -19.11,
   "hfov": 23.25,
   "yaw": 78.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.2,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5, this.camera_4B834111_582F_A7C0_41B1_3C93DD2ED9FA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB0DB27_583D_5BC0_41AA_2B1ECC66BA60",
   "pitch": -19.51,
   "hfov": 23.2,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -103.65,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 32.44,
 "bleaching": 0.7,
 "id": "overlay_11C844E8_1C40_81A3_41BD_135085A6CD77"
},
{
 "id": "viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea9063"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal"
},
{
 "viewerArea": "this.viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8",
 "id": "viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "viewer_uid4AD8D085_582F_A6C1_41B1_6E5B718024B8",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea9059"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.31,
   "yaw": -135.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_4B2620A4_582F_A6C7_41D4_177DAA3B10B6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E88DB2C_583D_5BC0_419D_2C833111FE8B",
   "pitch": -19.41,
   "hfov": 27.31,
   "yaw": -135.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.18,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_4B2FD0A4_582F_A6C7_41D2_6BE1FB84FB54); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E88BB2C_583D_5BC0_41CB_BA31C78C532E",
   "pitch": -21.39,
   "hfov": 22.18,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 43.32,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 10.29,
 "bleaching": 0.7,
 "id": "overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51"
},
{
 "bleachingDistance": 0.4,
 "yaw": -134.9,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 26.11,
 "bleaching": 0.7,
 "id": "overlay_11602292_1C40_8067_41BB_2E6F1F452D7E"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.8,
   "yaw": 6.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8A8B2B_583D_5BC0_41D1_8EE0A5D823E3",
   "pitch": -15.95,
   "hfov": 24.8,
   "yaw": 6.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.95,
   "yaw": 93.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_4B8DA121_582F_A7C1_41C7_4590D6D80815); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E891B2B_583D_5BC0_41B7_B359D1A472BD",
   "pitch": -21.68,
   "hfov": 21.95,
   "yaw": 93.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.36,
   "yaw": -84.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E89FB2B_583D_5BC0_41B9_A82EC94F78BF",
   "pitch": -13.38,
   "hfov": 18.36,
   "yaw": -84.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1898879C_05E6_F63D_4170_66ECE8880613",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.86,
   "yaw": -176.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_4BFDC131_582F_A7C1_41B2_6962AC455F88); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E89BB2B_583D_5BC0_41C8_4ABAE82EEAE0",
   "pitch": -14.36,
   "hfov": 18.86,
   "yaw": -176.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19A5772E_05E6_B61C_415F_7028C1939683",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -65.47,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 62.51,
 "bleaching": 0.7,
 "id": "overlay_11D2095E_1C41_809F_41B8_C294BD237B79"
},
{
 "bleachingDistance": 0.4,
 "yaw": -153.3,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.87,
 "bleaching": 0.7,
 "id": "overlay_11CF4C1F_1C41_809D_41BE_3FF96C7D50B9"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.95,
   "yaw": 4.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8B5B29_583D_5BC0_41B3_B548D51E39AA",
   "pitch": -22.38,
   "hfov": 24.95,
   "yaw": 4.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.1,
   "yaw": 175.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C, this.camera_4B79B0D3_582F_A641_41D2_448F871430EE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8B0B29_583D_5BC0_41C7_816D5CED24AF",
   "pitch": -11.68,
   "hfov": 24.1,
   "yaw": 175.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -38.77,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.53,
 "bleaching": 0.7,
 "id": "overlay_11D14F06_1C40_806F_41A5_E686DA55E819"
},
{
 "bleachingDistance": 0.4,
 "yaw": 139.25,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.21,
 "bleaching": 0.7,
 "id": "overlay_11C7B8B0_1C41_81A3_41B3_78D1EDBFEF2C"
},
{
 "bleachingDistance": 0.4,
 "yaw": -160.81,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 57.56,
 "bleaching": 0.7,
 "id": "overlay_11315F1B_1C41_8065_41BC_97C4A090EED6"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.01,
   "yaw": -78.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_4A6A9D8C_582D_5EC7_41D3_AC34ADED7345, this.video_4A3A7878_582D_A64F_41CE_73B1447DE0D8, this.playList_4C55A711_5835_6BC0_41D0_D89C5F5A3DFE, '90%', '90%', false, true); if(this.AnimatedImageResource_4E8BAB2A_583D_5BC0_41C2_9EBD1EF90697.get('state') != 'playing'){ this.AnimatedImageResource_4E8BAB2A_583D_5BC0_41C2_9EBD1EF90697.play(); } else { this.AnimatedImageResource_4E8BAB2A_583D_5BC0_41C2_9EBD1EF90697.pause(); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8BAB2A_583D_5BC0_41C2_9EBD1EF90697",
   "pitch": 8.63,
   "hfov": 32.01,
   "yaw": -78.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_57EB1A53_582E_DA41_41C4_44C8BDB404AB",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.13,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_4B0C20C3_582F_A641_41CF_7E609B386EFE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8FDB2C_583D_5BC0_41D0_A694791AB9FE",
   "pitch": -29.5,
   "hfov": 28.13,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -175.05,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 65.08,
 "bleaching": 0.7,
 "id": "overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.47,
   "yaw": -94.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C, this.camera_4BDE2140_582F_A7BF_41D5_2ECF3661D599); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8E4B2C_583D_5BC0_41C4_7D1CFB391DBC",
   "pitch": -38,
   "hfov": 25.47,
   "yaw": -94.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1978731D_05E5_6E3F_4191_617BBE176123",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.66,
   "yaw": 65.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5, this.camera_4BCEB150_582F_A65F_41C3_C6D82F57FA55); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8E3B2C_583D_5BC1_41CB_107D16BF3DC1",
   "pitch": -34.44,
   "hfov": 26.66,
   "yaw": 65.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1AF25F56_05E5_960C_417A_214619834776",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.38,
   "yaw": 169.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_4BEF8131_582F_A7C1_4175_B7C9067314DC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8E9B2D_583D_5BC0_41D3_DDC8FA91F053",
   "pitch": -13.57,
   "hfov": 22.38,
   "yaw": 169.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -26.9,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 80.51,
 "bleaching": 0.7,
 "id": "overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4"
},
{
 "id": "viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea9061"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal"
},
{
 "viewerArea": "this.viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5",
 "id": "viewer_uid4AC2B085_582F_A6C1_41B8_5A47FCE5A9B5VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.4,
   "yaw": -70.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5, this.camera_4BA10102_582F_A7C3_41A7_75D40D264294); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB3FB24_583D_5BC0_41BE_C8D89B961B1F",
   "pitch": -28.51,
   "hfov": 28.4,
   "yaw": -70.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.99,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB27B24_583D_5BC0_41D1_5C3D86AA148C",
   "pitch": -18.32,
   "hfov": 25.99,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -137.87,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 33.23,
 "bleaching": 0.7,
 "id": "overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.19,
   "yaw": 26.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_228FC079_2D3E_5DDD_41C1_D8CEC58BC90C, this.video_04D7D61C_1F37_B459_41B4_9025DA67A495, this.playList_48932B70_5815_BA5F_41D5_DA222B454B16, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB2DB25_583D_5BC0_41C8_F7933B1D0D84",
   "pitch": -11.15,
   "hfov": 18.19,
   "yaw": 26.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22547FB4_2D3A_236A_41AE_60E51DFB4D36",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 }
},
{
 "id": "viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea9060"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.14,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB1DB26_583D_5BC0_41AF_49A705CD8791",
   "pitch": -21.19,
   "hfov": 30.14,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.35,
   "yaw": -171.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_4B0130B4_582F_A6C7_41D1_0586BDA39B68); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB19B27_583D_5BC0_41C6_48B4A6349ECF",
   "pitch": -24.75,
   "hfov": 29.35,
   "yaw": -171.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_132E8F63_05AD_960B_4182_A0BB34998BEF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.62,
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_4B1AD0B4_582F_A6C7_41B8_BF8120D94B61); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8D9B2D_583D_5BC0_41AF_EE157E130AB1",
   "pitch": -31.28,
   "hfov": 27.62,
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19469E19_05E5_9604_418A_081538C24A34",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "viewerArea": "this.viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830",
 "id": "viewer_uid4ADF2085_582F_A6C1_41B2_1A055C2AB830VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "viewer_uid4ADC4085_582F_A6C1_41C4_E4A4CF2B75C4",
 "playbackBarProgressBorderSize": 0,
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "width": "100%",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea9062"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.35,
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8A9B2A_583D_5BC0_41C9_467143DD1287",
   "pitch": -24.75,
   "hfov": 29.35,
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.05,
   "yaw": -58.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_4B5470E2_582F_A640_41C6_71A126F82A09); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E897B2A_583D_5BC0_41CF_A80378A4EE8F",
   "pitch": -11.89,
   "hfov": 19.05,
   "yaw": -58.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.78,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_4B6590D3_582F_A641_418E_A727B59BE34C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8BBB2A_583D_5BC0_41D1_3A628B7C8753",
   "pitch": -20.6,
   "hfov": 23.78,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.22,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E, this.camera_4B4660F2_582F_A643_41C8_B9C6E30536A5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8A6B2B_583D_5BC0_41A7_10B1CB34F2AE",
   "pitch": -20.79,
   "hfov": 30.22,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -59.93,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 65.27,
 "bleaching": 0.7,
 "id": "overlay_11CCCEEE_1C41_81BF_419E_4996AF0BE249"
},
{
 "bleachingDistance": 0.4,
 "yaw": -163.98,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 48.86,
 "bleaching": 0.7,
 "id": "overlay_1134A905_1C41_806D_41B4_6660D1FB3557"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.77,
   "yaw": 172.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_167546D9_055B_9607_417E_841620224C88, this.camera_4C28D15F_582F_A640_41B4_DB1CCAEAADA6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB75B27_583D_5BC0_41C1_9D62E562BF2E",
   "pitch": -17.83,
   "hfov": 30.77,
   "yaw": 172.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.9,
   "yaw": 84.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB70B27_583D_5BC0_41CE_B685A289262B",
   "pitch": -17.03,
   "hfov": 30.9,
   "yaw": 84.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 128.77,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 69.63,
 "bleaching": 0.7,
 "id": "overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2"
},
{
 "blending": 0,
 "id": "overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784",
 "stateChange": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784', [this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784]); } else { this.resumeGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784'); }",
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 800
   }
  ]
 },
 "pitch": 24.16,
 "useHandCursor": true,
 "roll": -5.52,
 "click": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') != 'playing'){ this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.play(); } else { this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.pause(); }",
 "hfov": 24.42,
 "autoplay": true,
 "yaw": -80.32,
 "vfov": 13.39,
 "rotationY": 8.95,
 "rotationX": -25.9,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_05F07538_1F39_B459_41A6_C3867706CB19.mp4",
  "class": "VideoResource",
  "height": 800
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.08,
   "yaw": -106.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_01383337_1F38_8C57_4150_B7C2A62B59CC, this.video_039BD232_1F37_8C69_4198_D62E41B974BF, this.playList_488EDB70_5815_BA5F_41CB_9DD73A063C6B, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB62B28_583D_5BC0_41D3_861E7A32E24C",
   "pitch": -12.44,
   "hfov": 13.08,
   "yaw": -106.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2393D3A0_2D37_E36B_4197_5AAD17A3B07D",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.13,
   "yaw": -64.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_3C1B182C_2D3A_ED7A_41A9_F3095186711B, this.video_02DD7427_1F37_B477_41B7_65C40F330FB3, this.playList_4889CB70_5815_BA5F_41C7_121A51556373, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB57B28_583D_5BC0_41A6_9E2A3A6D6980",
   "pitch": -11.44,
   "hfov": 13.13,
   "yaw": -64.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_224A2CFD_2D36_26DA_41B5_FDF5133D1587",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.39,
   "yaw": -151.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_3A907106_2F16_3F36_4187_700F39F99C49, this.video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F, this.playList_48890B70_5815_BA5F_41C1_207B08C79128, '90%', '90%', false, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4EB59B29_583D_5BC0_41C7_3F9D1C266546",
   "pitch": 1.81,
   "hfov": 13.39,
   "yaw": -151.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3C5B1CD3_2F2A_252E_41AC_7A9F8DB86E33",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.86,
   "yaw": -107.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_7_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_7_0.png",
      "width": 524,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ]
   },
   "pitch": -28.56,
   "yaw": -107.84,
   "distance": 50
  }
 ],
 "id": "overlay_56E40669_581D_6A40_41CA_47A158CD876B",
 "data": {
  "label": "COSTELA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.15,
   "yaw": -152.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_8_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_8_0.png",
      "width": 228,
      "class": "ImageResourceLevel",
      "height": 202
     }
    ]
   },
   "pitch": -8.77,
   "yaw": -152.16,
   "distance": 50
  }
 ],
 "id": "overlay_56672530_581B_EFC0_41C1_3D072E085078",
 "data": {
  "label": "Imagem"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.31,
   "yaw": -63.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_9_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_9_0.png",
      "width": 449,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ]
   },
   "pitch": -24.84,
   "yaw": -63.88,
   "distance": 50
  }
 ],
 "id": "overlay_56CBEC8D_581A_BEC1_41B0_2813E34D2ADE",
 "data": {
  "label": "Imagem"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.47,
   "yaw": 164.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_4C385150_582F_A65F_41D3_7C452FD6270A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4E8D0B2D_583D_5BC0_4190_C73E504AFEB0",
   "pitch": -35.03,
   "hfov": 26.47,
   "yaw": 164.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_195027C2_05E5_F605_4177_4A79943AEFCC",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "viewerArea": "this.viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064",
 "id": "viewer_uid4ADFA085_582F_A6C1_41D5_97EC2507B064VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 90,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "COLUNINHA"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 0,
 "width": 330,
 "creationPolicy": "inAdvance",
 "overflow": "visible",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4EBC3B24_583D_5BC0_41D5_44A81C076980",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB06B27_583D_5BC0_4191_7ABAD634572D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB0DB27_583D_5BC0_41AA_2B1ECC66BA60",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E88DB2C_583D_5BC0_419D_2C833111FE8B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E88BB2C_583D_5BC0_41CB_BA31C78C532E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8A8B2B_583D_5BC0_41D1_8EE0A5D823E3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E891B2B_583D_5BC0_41B7_B359D1A472BD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E89FB2B_583D_5BC0_41B9_A82EC94F78BF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E89BB2B_583D_5BC0_41C8_4ABAE82EEAE0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8B5B29_583D_5BC0_41B3_B548D51E39AA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8B0B29_583D_5BC0_41C7_816D5CED24AF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_2_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_4E8BAB2A_583D_5BC0_41C2_9EBD1EF90697",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8FDB2C_583D_5BC0_41D0_A694791AB9FE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8E4B2C_583D_5BC0_41C4_7D1CFB391DBC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8E3B2C_583D_5BC1_41CB_107D16BF3DC1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8E9B2D_583D_5BC0_41D3_DDC8FA91F053",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB3FB24_583D_5BC0_41BE_C8D89B961B1F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB27B24_583D_5BC0_41D1_5C3D86AA148C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_2_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_4EB2DB25_583D_5BC0_41C8_F7933B1D0D84",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB1DB26_583D_5BC0_41AF_49A705CD8791",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB19B27_583D_5BC0_41C6_48B4A6349ECF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8D9B2D_583D_5BC0_41AF_EE157E130AB1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8A9B2A_583D_5BC0_41C9_467143DD1287",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E897B2A_583D_5BC0_41CF_A80378A4EE8F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8BBB2A_583D_5BC0_41D1_3A628B7C8753",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8A6B2B_583D_5BC0_41A7_10B1CB34F2AE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB75B27_583D_5BC0_41C1_9D62E562BF2E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4EB70B27_583D_5BC0_41CE_B685A289262B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_4_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_4EB62B28_583D_5BC0_41D3_861E7A32E24C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_5_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_4EB57B28_583D_5BC0_41A6_9E2A3A6D6980",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_6_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_4EB59B29_583D_5BC0_41C7_3F9D1C266546",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_4E8D0B2D_583D_5BC0_4190_C73E504AFEB0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": 36,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": "100%",
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "width": 70,
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "class": "IconButton",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "BOT\u00c3O ABRIR"
 }
},
{
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "width": "90%",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": "100%",
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 9,
 "width": 70,
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "class": "IconButton",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": true,
 "paddingBottom": 0,
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "BOTAO FECHAR"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
  "this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
  "this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
  "this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9"
 ],
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "paddingLeft": 40,
 "backgroundOpacity": 0.7,
 "paddingRight": 40,
 "overflow": "scroll",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "paddingTop": 40,
 "paddingBottom": 40,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "height": "100%",
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 2268,
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "7.74%",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0.09%",
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "bottom": "0%",
 "class": "Image",
 "minWidth": 200,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center",
 "maxWidth": 400,
 "data": {
  "name": "REDES VERTICAL"
 }
},
{
 "id": "ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": "50.69%",
 "bottom": "33.47%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "click": "this.openLink('https://www.facebook.com/JohnnieJackBar', '_blank')",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "id": "ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": "0.46%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": "73.5%",
 "bottom": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "click": "this.openLink('https://www.instagram.com/johnniejackbar/', '_blank')",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "id": "ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
 "left": "0.41%",
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": "0.46%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": "28.19%",
 "bottom": "53.66%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "click": "this.openLink('https://youtu.be/kCrHIM-LT1E', '_blank')",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6
},
{
 "id": "ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "right": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": "0%",
 "bottom": "75.29%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "click": "this.openLink('https://api.whatsapp.com/send/?phone=5553991244664', '_blank')",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6
}],
 "class": "Player",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "height": "100%",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "data": {
  "name": "Player1098"
 },
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
