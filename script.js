(function(){
    var script = {
 "start": "this.playAudioList([this.audio_0993778A_1DC1_8066_41AA_341608237604]); this.init()",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "downloadEnabled": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "class": "Player",
 "data": {
  "name": "Player1098"
 },
 "overflow": "visible",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera"
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera"
},
{
 "class": "Video",
 "label": "JJ (4)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_049547FB_1F37_B3DF_41BB_2A71C7F926F4_t.jpg",
 "width": 720,
 "loop": false,
 "id": "video_049547FB_1F37_B3DF_41BB_2A71C7F926F4",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "height": 1280,
  "mp4Url": "media/video_049547FB_1F37_B3DF_41BB_2A71C7F926F4.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.33,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_3537231F_1F39_8C58_419A_235F2252F0D1"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_167546D9_055B_9607_417E_841620224C88_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_167546D9_055B_9607_417E_841620224C88",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1675F608_055B_9605_4148_289A093B3218_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.video_039BD232_1F37_8C69_4198_D62E41B974BF",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.video_02DD7427_1F37_B477_41B7_65C40F330FB3",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.video_04D7D61C_1F37_B459_41B4_9025DA67A495",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.video_049547FB_1F37_B3DF_41BB_2A71C7F926F4",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.video_045309E1_1F37_BFE8_4163_9893FF0D9E0A",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "media": "this.video_05CB1B88_1F37_BC38_41B6_BCEB8034714E",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)"
  }
 ],
 "id": "mainPlayList"
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "004 copiar",
 "id": "panorama_167546D9_055B_9607_417E_841620224C88",
 "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
  "this.overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
  "this.overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
  "this.overlay_11C844E8_1C40_81A3_41BD_135085A6CD77"
 ]
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "007 copiar",
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08",
 "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
  "this.overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
  "this.overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
  "this.overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
  "this.overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
  "this.overlay_11CCCEEE_1C41_81BF_419E_4996AF0BE249",
  "this.overlay_1134A905_1C41_806D_41B4_6660D1FB3557"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_35274329_1F39_8C78_41B3_CEEC4B980DE7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.19,
  "pitch": -0.79
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera"
},
{
 "class": "Video",
 "label": "JJ (3)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_04D7D61C_1F37_B459_41B4_9025DA67A495_t.jpg",
 "width": 720,
 "loop": false,
 "id": "video_04D7D61C_1F37_B459_41B4_9025DA67A495",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "height": 1280,
  "mp4Url": "media/video_04D7D61C_1F37_B459_41B4_9025DA67A495.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.65,
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_365A2278_1F39_8CD8_41B5_28A4AAEE590B"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_6AAC9764_05BF_960D_4167_B79BED30937C",
 "easing": "quad_in",
 "from": "left"
},
{
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "to": "left"
},
{
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_706911C3_05BA_EA04_4193_07910AFBC595",
 "easing": "quad_in",
 "to": "left"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.65,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36BE62A5_1F39_8C68_41B2_63F88E9C5697"
},
{
 "class": "Video",
 "label": "JJ (5)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_05F07538_1F39_B459_41A6_C3867706CB19_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_05F07538_1F39_B459_41A6_C3867706CB19",
 "height": 800,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_05F07538_1F39_B459_41A6_C3867706CB19.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_camera"
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "009 copiar",
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218",
 "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
  "this.overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
  "this.overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
  "this.overlay_1898879C_05E6_F63D_4170_66ECE8880613",
  "this.overlay_19A5772E_05E6_B61C_415F_7028C1939683",
  "this.overlay_11D2095E_1C41_809F_41B8_C294BD237B79",
  "this.overlay_11CF4C1F_1C41_809D_41BE_3FF96C7D50B9"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.76,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_369D82CD_1F39_8C3B_41B6_DB8E2C55B0E2"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3672B239_1F39_8C5B_41B9_97E49FABAB89, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3672B239_1F39_8C5B_41B9_97E49FABAB89, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_05F07538_1F39_B459_41A6_C3867706CB19",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3672B239_1F39_8C5B_41B9_97E49FABAB89"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.08,
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_3683B2E2_1F39_8DE8_41AA_141D0F345AE1"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.59,
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36568268_1F39_8CF9_41A5_BB9781FAD4A9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera"
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "011 copiar",
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
 "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
  "this.overlay_1978731D_05E5_6E3F_4191_617BBE176123",
  "this.overlay_1AF25F56_05E5_960C_417A_214619834776",
  "this.overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
  "this.overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera"
},
{
 "class": "Video",
 "label": "JJ (6)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_05CB1B88_1F37_BC38_41B6_BCEB8034714E_t.jpg",
 "width": 720,
 "loop": false,
 "id": "video_05CB1B88_1F37_BC38_41B6_BCEB8034714E",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "height": 1280,
  "mp4Url": "media/video_05CB1B88_1F37_BC38_41B6_BCEB8034714E.mp4"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -4.27,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.27,
  "pitch": -3.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": -3.53,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ]
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Window6249"
 },
 "bodyPaddingRight": 0,
 "id": "window_01383337_1F38_8C57_4150_B7C2A62B59CC",
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "minHeight": 20,
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "veilColorDirection": "horizontal",
 "minWidth": 20,
 "titleFontSize": "1.29vmin",
 "modal": true,
 "backgroundColor": [],
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadowSpread": 1,
 "closeButtonBorderColor": "#FF0000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "title": "",
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "closeButtonPressedIconLineWidth": 3,
 "bodyPaddingBottom": 0,
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "class": "Window",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonPressedBackgroundColor": [],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "propagateClick": false,
 "shadow": true,
 "headerPaddingRight": 0,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid36758239_1F39_8C5B_41B6_495747E834E5"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "layout": "vertical",
 "shadowColor": "#000000",
 "footerHeight": 5,
 "borderSize": 0,
 "paddingRight": 0,
 "titleFontStyle": "normal",
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "headerPaddingBottom": 5,
 "closeButtonIconColor": "#FF0000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "closeButtonPaddingRight": 0,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "shadowBlurRadius": 6,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "gap": 10,
 "titleTextDecoration": "none",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  1
 ],
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "005 copiar",
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
 "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
  "this.overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
  "this.overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
  "this.overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2",
  "this.overlay_3C33444F_1DC0_80FD_418E_A020B9279C3D",
  "this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784"
 ]
},
{
 "class": "Video",
 "label": "JJ (2)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_02DD7427_1F37_B477_41B7_65C40F330FB3_t.jpg",
 "width": 720,
 "loop": false,
 "id": "video_02DD7427_1F37_B477_41B7_65C40F330FB3",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "height": 1280,
  "mp4Url": "media/video_02DD7427_1F37_B477_41B7_65C40F330FB3.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "010",
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
 "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
  "this.overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
  "this.overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.33,
  "pitch": -16.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36C17312_1F39_8C29_419A_940FBEE34B57"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.82,
  "pitch": -19.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_35156333_1F39_8C68_41B3_18CBA3064AC2"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_3505433D_1F39_8C5B_4175_EF6A9579E87E"
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_0993778A_1DC1_8066_41AA_341608237604.mp3",
  "oggUrl": "media/audio_0993778A_1DC1_8066_41AA_341608237604.ogg"
 },
 "autoplay": true,
 "id": "audio_0993778A_1DC1_8066_41AA_341608237604",
 "data": {
  "label": "y2mate.com - Chuck Berry  Johnny B Goode Remastered"
 }
},
{
 "class": "Video",
 "label": "JJ (5)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_045309E1_1F37_BFE8_4163_9893FF0D9E0A_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_045309E1_1F37_BFE8_4163_9893FF0D9E0A",
 "height": 800,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_045309E1_1F37_BFE8_4163_9893FF0D9E0A.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.55,
  "pitch": -11.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_350AA347_1F39_8C37_41B2_883639E3B825"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.14,
  "pitch": -13.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36E312FE_1F39_8DD9_41AD_3E8C65200702"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_camera"
},
{
 "class": "SlideInEffect",
 "duration": 0,
 "id": "effect_671F5FB9_05AA_B607_4186_4F9D961227F2",
 "easing": "linear",
 "from": "right"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "013",
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
 "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
  "this.overlay_19469E19_05E5_9604_418A_081538C24A34"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "001...LEG",
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
 "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA",
  "this.overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
  "this.overlay_095AB540_1DC3_80E2_41A9_F907CE185EDF",
  "this.overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_356B2364_1F39_8CE8_41A3_2890D2473E99"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.96,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36AC42B9_1F39_8C5B_41A5_BD08074494D9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "002 copiar",
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0",
 "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
  "this.overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
  "this.overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
  "this.overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6"
 ]
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "006",
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
 "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
  "this.overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
  "this.overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
  "this.overlay_11D14F06_1C40_806F_41A5_E686DA55E819",
  "this.overlay_11C7B8B0_1C41_81A3_41B3_78D1EDBFEF2C",
  "this.overlay_11315F1B_1C41_8065_41BC_97C4A090EED6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "003 copiar",
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
 "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
  "this.overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
  "this.overlay_132E8F63_05AD_960B_4182_A0BB34998BEF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.92,
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_357B2351_1F39_8C2B_41BE_935E5DC26FDB"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera"
},
{
 "class": "Video",
 "label": "JJ (1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_039BD232_1F37_8C69_4198_D62E41B974BF_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_039BD232_1F37_8C69_4198_D62E41B974BF",
 "height": 800,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_039BD232_1F37_8C69_4198_D62E41B974BF.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36F3C2EC_1F39_8DF8_417B_C79147AC3FC8"
},
{
 "class": "FadeOutEffect",
 "duration": 1100,
 "id": "effect_56EFE123_05DD_AA0B_417A_2772B8D8B446",
 "easing": "quad_in"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.viewer_uid36758239_1F39_8C5B_41B6_495747E834E5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_36039886_1F38_9C29_41B5_F74740F94E94, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_36039886_1F38_9C29_41B5_F74740F94E94, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid36758239_1F39_8C5B_41B6_495747E834E5VideoPlayer)",
   "media": "this.video_039BD232_1F37_8C69_4198_D62E41B974BF",
   "player": "this.viewer_uid36758239_1F39_8C5B_41B6_495747E834E5VideoPlayer"
  }
 ],
 "id": "playList_36039886_1F38_9C29_41B5_F74740F94E94"
},
{
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
 "hfovMin": "150%",
 "hfov": 360,
 "label": "008",
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
 "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
  "this.overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
  "this.overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
  "this.overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51",
  "this.overlay_11602292_1C40_8067_41BB_2E6F1F452D7E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "012",
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
 "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
  "this.overlay_195027C2_05E5_F605_4177_4A79943AEFCC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_364ED290_1F39_8C29_419B_FD96FF4F93A2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.71,
  "pitch": -11.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_36D13308_1F39_8C39_41BE_2B66CD732ED2"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "height": "100%",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "left": "0%",
 "width": 327.9,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "overflow": "scroll",
 "shadow": false
},
{
 "propagateClick": false,
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fill",
 "borderRadius": 0,
 "shadow": false,
 "class": "Image",
 "data": {
  "name": "FUNDO PRETO"
 }
},
{
 "propagateClick": false,
 "maxHeight": 801,
 "maxWidth": 1000,
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "10%",
 "right": "8.7%",
 "borderSize": 0,
 "paddingRight": 0,
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "paddingLeft": 0,
 "minHeight": 600,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "5%",
 "bottom": "10.22%",
 "minWidth": 600,
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false)",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "class": "Image",
 "data": {
  "name": "TEXTO INICIAL"
 },
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "width": 80,
 "right": "9.23%",
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "minWidth": 0,
 "mode": "toggle",
 "height": 74,
 "top": "3.28%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "class": "IconButton",
 "data": {
  "name": "MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.17,
   "pitch": -19.71,
   "yaw": 78.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0826CA51_1F28_9C2B_41BE_3D29D91B4FC5",
   "distance": 100
  }
 ],
 "id": "overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
 "maps": [
  {
   "hfov": 23.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -19.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5, this.camera_356B2364_1F39_8CE8_41A3_2890D2473E99); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.2,
   "pitch": -19.51,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0826EA51_1F28_9C2B_41BB_AC0A679E0C9D",
   "distance": 100
  }
 ],
 "id": "overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
 "maps": [
  {
   "hfov": 23.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -19.51
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 32.44,
 "id": "overlay_11C844E8_1C40_81A3_41BD_135085A6CD77",
 "yaw": -103.65,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.35,
   "pitch": -24.75,
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08265A51_1F28_9C2B_41B8_89B26BF86ADF",
   "distance": 100
  }
 ],
 "id": "overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
 "maps": [
  {
   "hfov": 29.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_365A2278_1F39_8CD8_41B5_28A4AAEE590B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.05,
   "pitch": -11.89,
   "yaw": -58.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08260A51_1F28_9C2B_41B9_C4F258495388",
   "distance": 100
  }
 ],
 "id": "overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
 "maps": [
  {
   "hfov": 19.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -11.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_36568268_1F39_8CF9_41A5_BB9781FAD4A9); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.78,
   "pitch": -20.6,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08262A51_1F28_9C2B_41B5_918590B790BA",
   "distance": 100
  }
 ],
 "id": "overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
 "maps": [
  {
   "hfov": 23.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -20.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E, this.camera_364ED290_1F39_8C29_419B_FD96FF4F93A2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.22,
   "pitch": -20.79,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0821CA51_1F28_9C2B_4192_DE809899A76C",
   "distance": 100
  }
 ],
 "id": "overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
 "maps": [
  {
   "hfov": 30.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -20.79
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 65.27,
 "id": "overlay_11CCCEEE_1C41_81BF_419E_4996AF0BE249",
 "yaw": -59.93,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 48.86,
 "id": "overlay_1134A905_1C41_806D_41B4_6660D1FB3557",
 "yaw": -163.98,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.8,
   "pitch": -15.95,
   "yaw": 6.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0821AA51_1F28_9C2B_41A0_5B8D948BF483",
   "distance": 100
  }
 ],
 "id": "overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
 "maps": [
  {
   "hfov": 24.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_35156333_1F39_8C68_41B3_18CBA3064AC2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.95,
   "pitch": -21.68,
   "yaw": 93.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08215A51_1F28_9C2B_418A_24DA271A62A9",
   "distance": 100
  }
 ],
 "id": "overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
 "maps": [
  {
   "hfov": 21.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.36,
   "pitch": -13.38,
   "yaw": -84.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08217A51_1F28_9C2B_41B7_6B9C3C3BDBFB",
   "distance": 100
  }
 ],
 "id": "overlay_1898879C_05E6_F63D_4170_66ECE8880613",
 "maps": [
  {
   "hfov": 18.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -13.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_3505433D_1F39_8C5B_4175_EF6A9579E87E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.86,
   "pitch": -14.36,
   "yaw": -176.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08212A51_1F28_9C2B_41A5_7C1828270744",
   "distance": 100
  }
 ],
 "id": "overlay_19A5772E_05E6_B61C_415F_7028C1939683",
 "maps": [
  {
   "hfov": 18.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -14.36
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 62.51,
 "id": "overlay_11D2095E_1C41_809F_41B8_C294BD237B79",
 "yaw": -65.47,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 47.87,
 "id": "overlay_11CF4C1F_1C41_809D_41BE_3FF96C7D50B9",
 "yaw": -153.3,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C, this.camera_36C17312_1F39_8C29_419A_940FBEE34B57); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.47,
   "pitch": -38,
   "yaw": -94.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0823EA51_1F28_9C2B_41AB_C1BE9931B16C",
   "distance": 100
  }
 ],
 "id": "overlay_1978731D_05E5_6E3F_4191_617BBE176123",
 "maps": [
  {
   "hfov": 25.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5, this.camera_3537231F_1F39_8C58_419A_235F2252F0D1); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.66,
   "pitch": -34.44,
   "yaw": 65.22,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08238A51_1F28_9C2B_41B3_2B9031C30E4F",
   "distance": 100
  }
 ],
 "id": "overlay_1AF25F56_05E5_960C_417A_214619834776",
 "maps": [
  {
   "hfov": 26.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -34.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_36D13308_1F39_8C39_41BE_2B66CD732ED2); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.38,
   "pitch": -13.57,
   "yaw": 169.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0823AA51_1F28_9C2B_41B4_3940BBC6814B",
   "distance": 100
  }
 ],
 "id": "overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
 "maps": [
  {
   "hfov": 22.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -13.57
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 80.51,
 "id": "overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4",
 "yaw": -26.9,
 "bleachingDistance": 0.4
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid36758239_1F39_8C5B_41B6_495747E834E5",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "minHeight": 50,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "height": "100%",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea7617"
 }
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_167546D9_055B_9607_417E_841620224C88, this.camera_357B2351_1F39_8C2B_41BE_935E5DC26FDB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.77,
   "pitch": -17.83,
   "yaw": 172.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0826BA51_1F28_9C2B_41A2_3A1FDD48A333",
   "distance": 100
  }
 ],
 "id": "overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
 "maps": [
  {
   "hfov": 30.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -17.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.9,
   "pitch": -17.03,
   "yaw": 84.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08265A51_1F28_9C2B_41B6_E8C36FCD6FA7",
   "distance": 100
  }
 ],
 "id": "overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
 "maps": [
  {
   "hfov": 30.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -17.03
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 69.63,
 "id": "overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2",
 "yaw": 128.77,
 "bleachingDistance": 0.4
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_01383337_1F38_8C57_4150_B7C2A62B59CC, this.video_039BD232_1F37_8C69_4198_D62E41B974BF, this.playList_36039886_1F38_9C29_41B5_F74740F94E94, '90%', '90%', false, true); if(this.AnimatedImageResource_361CF886_1F38_9C29_41B5_4DA25A2CE7E8.get('state') != 'playing'){ this.AnimatedImageResource_361CF886_1F38_9C29_41B5_4DA25A2CE7E8.play(); } else { this.AnimatedImageResource_361CF886_1F38_9C29_41B5_4DA25A2CE7E8.pause(); }"
  }
 ],
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.37,
   "pitch": 4.17,
   "yaw": -103.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_361CF886_1F38_9C29_41B5_4DA25A2CE7E8",
   "distance": 100
  }
 ],
 "id": "overlay_3C33444F_1DC0_80FD_418E_A020B9279C3D",
 "maps": [
  {
   "hfov": 13.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.17
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_05F07538_1F39_B459_41A6_C3867706CB19.mp4"
 },
 "hfov": 24.79,
 "autoplay": true,
 "id": "overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784",
 "enabledInCardboard": true,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784_t.jpg",
    "class": "ImageResourceLevel",
    "width": 640,
    "height": 800
   }
  ]
 },
 "pitch": 24.27,
 "useHandCursor": true,
 "roll": -7.73,
 "yaw": -80.17,
 "rotationY": 13.19,
 "class": "VideoPanoramaOverlay",
 "rotationX": -34.66,
 "click": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') != 'playing'){ this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.play(); } else { this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.pause(); }",
 "videoVisibleOnStop": false,
 "stateChange": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784', [this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784]); } else { this.resumeGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784'); }",
 "data": {
  "label": "Video"
 },
 "vfov": 15.04,
 "distance": 50
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_36F3C2EC_1F39_8DF8_417B_C79147AC3FC8); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.13,
   "pitch": -29.5,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08201A51_1F28_9C2B_41A5_906DDCFBFF9E",
   "distance": 100
  }
 ],
 "id": "overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
 "maps": [
  {
   "hfov": 28.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -29.5
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 65.08,
 "id": "overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03",
 "yaw": -175.05,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_369D82CD_1F39_8C3B_41B6_DB8E2C55B0E2); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.62,
   "pitch": -31.28,
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0822CA51_1F28_9C2B_41A3_34596F035830",
   "distance": 100
  }
 ],
 "id": "overlay_19469E19_05E5_9604_418A_081538C24A34",
 "maps": [
  {
   "hfov": 27.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -31.28
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 43.5,
 "id": "panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_35274329_1F39_8C78_41B3_CEEC4B980DE7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.22,
   "pitch": -18,
   "yaw": -19.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_082A0A51_1F28_9C2B_419A_3CF380FCC85A",
   "distance": 100
  }
 ],
 "id": "overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
 "maps": [
  {
   "hfov": 23.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 164,
      "height": 214
     }
    ]
   },
   "pitch": 33.37,
   "yaw": -58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_095AB540_1DC3_80E2_41A9_F907CE185EDF",
 "data": {
  "label": "Imagem"
 },
 "maps": [
  {
   "hfov": 9.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": 33.37
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 40.75,
 "id": "overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE",
 "yaw": -110.18,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.97,
   "pitch": -26.33,
   "yaw": -70.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0827FA51_1F28_9C2B_41B5_AF9D73AD1EF2",
   "distance": 100
  }
 ],
 "id": "overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
 "maps": [
  {
   "hfov": 28.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -26.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.99,
   "pitch": -18.32,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08279A51_1F28_9C2B_41BA_04B637901E76",
   "distance": 100
  }
 ],
 "id": "overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
 "maps": [
  {
   "hfov": 25.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -18.32
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 33.23,
 "id": "overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6",
 "yaw": -137.87,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.95,
   "pitch": -22.38,
   "yaw": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0821EA51_1F28_9C2B_41A2_C7E9006C282D",
   "distance": 100
  }
 ],
 "id": "overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
 "maps": [
  {
   "hfov": 24.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -22.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C, this.camera_3683B2E2_1F39_8DE8_41AA_141D0F345AE1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.1,
   "pitch": -11.68,
   "yaw": 175.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08218A51_1F28_9C2B_41B2_7BC962C8F5F6",
   "distance": 100
  }
 ],
 "id": "overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
 "maps": [
  {
   "hfov": 24.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -11.68
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 60.53,
 "id": "overlay_11D14F06_1C40_806F_41A5_E686DA55E819",
 "yaw": -38.77,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 53.21,
 "id": "overlay_11C7B8B0_1C41_81A3_41B3_78D1EDBFEF2C",
 "yaw": 139.25,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 57.56,
 "id": "overlay_11315F1B_1C41_8065_41BC_97C4A090EED6",
 "yaw": -160.81,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.18,
   "pitch": -20.99,
   "yaw": 0.73,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08276A51_1F28_9C2B_41AC_0C9EF19ED767",
   "distance": 100
  }
 ],
 "id": "overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
 "maps": [
  {
   "hfov": 30.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -20.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_36E312FE_1F39_8DD9_41AD_3E8C65200702); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.35,
   "pitch": -24.75,
   "yaw": -171.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08270A51_1F28_9C2B_41BE_FAE4E74AC39B",
   "distance": 100
  }
 ],
 "id": "overlay_132E8F63_05AD_960B_4182_A0BB34998BEF",
 "maps": [
  {
   "hfov": 29.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -24.75
  }
 ]
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uid36758239_1F39_8C5B_41B6_495747E834E5",
 "id": "viewer_uid36758239_1F39_8C5B_41B6_495747E834E5VideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_36BE62A5_1F39_8C68_41B2_63F88E9C5697); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.31,
   "pitch": -19.41,
   "yaw": -135.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08208A51_1F28_9C2B_41A8_2E49827F94A8",
   "distance": 100
  }
 ],
 "id": "overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
 "maps": [
  {
   "hfov": 27.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -19.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_36AC42B9_1F39_8C5B_41A5_BD08074494D9); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.18,
   "pitch": -21.39,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0820BA51_1F28_9C2B_41B7_CF5FFEF771F6",
   "distance": 100
  }
 ],
 "id": "overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
 "maps": [
  {
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -21.39
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 10.29,
 "id": "overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51",
 "yaw": 43.32,
 "bleachingDistance": 0.4
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 26.11,
 "id": "overlay_11602292_1C40_8067_41BB_2E6F1F452D7E",
 "yaw": -134.9,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "class": "ImageResourceLevel",
    "width": 1000,
    "height": 1000
   }
  ]
 },
 "hfov": 45,
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_350AA347_1F39_8C37_41B2_883639E3B825); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.47,
   "pitch": -35.03,
   "yaw": 164.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_08230A51_1F28_9C2B_41A5_B71633CDC21B",
   "distance": 100
  }
 ],
 "id": "overlay_195027C2_05E5_F605_4177_4A79943AEFCC",
 "maps": [
  {
   "hfov": 26.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ]
   },
   "pitch": -35.03
  }
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "left": "0%",
 "width": 90,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "COLUNINHA"
 },
 "overflow": "scroll",
 "shadow": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "width": 330,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "right": 0,
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "scrollBarMargin": 2,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "class": "Container",
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "overflow": "visible",
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0826CA51_1F28_9C2B_41BE_3D29D91B4FC5",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0826EA51_1F28_9C2B_41BB_AC0A679E0C9D",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08265A51_1F28_9C2B_41B8_89B26BF86ADF",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08260A51_1F28_9C2B_41B9_C4F258495388",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08262A51_1F28_9C2B_41B5_918590B790BA",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0821CA51_1F28_9C2B_4192_DE809899A76C",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0821AA51_1F28_9C2B_41A0_5B8D948BF483",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08215A51_1F28_9C2B_418A_24DA271A62A9",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08217A51_1F28_9C2B_41B7_6B9C3C3BDBFB",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08212A51_1F28_9C2B_41A5_7C1828270744",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0823EA51_1F28_9C2B_41AB_C1BE9931B16C",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08238A51_1F28_9C2B_41B3_2B9031C30E4F",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0823AA51_1F28_9C2B_41B4_3940BBC6814B",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0826BA51_1F28_9C2B_41A2_3A1FDD48A333",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08265A51_1F28_9C2B_41B6_E8C36FCD6FA7",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "autoplay": false,
 "id": "AnimatedImageResource_361CF886_1F38_9C29_41B5_4DA25A2CE7E8",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1350
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08201A51_1F28_9C2B_41A5_906DDCFBFF9E",
 "levels": [
  {
   "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0822CA51_1F28_9C2B_41A3_34596F035830",
 "levels": [
  {
   "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_082A0A51_1F28_9C2B_419A_3CF380FCC85A",
 "levels": [
  {
   "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0827FA51_1F28_9C2B_41B5_AF9D73AD1EF2",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08279A51_1F28_9C2B_41BA_04B637901E76",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0821EA51_1F28_9C2B_41A2_C7E9006C282D",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08218A51_1F28_9C2B_41B2_7BC962C8F5F6",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08276A51_1F28_9C2B_41AC_0C9EF19ED767",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08270A51_1F28_9C2B_41BE_FAE4E74AC39B",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08208A51_1F28_9C2B_41A8_2E49827F94A8",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0820BA51_1F28_9C2B_41B7_CF5FFEF771F6",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_08230A51_1F28_9C2B_41A5_B71633CDC21B",
 "levels": [
  {
   "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 660
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "propagateClick": true,
 "width": 36,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "class": "Container",
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "maxHeight": 80,
 "maxWidth": 70,
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "width": 70,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "40%",
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "data": {
  "name": "BOT\u00c3O ABRIR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "90%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "Container"
 },
 "overflow": "scroll"
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "maxHeight": 50,
 "maxWidth": 70,
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "width": 70,
 "right": 9,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "bottom": "40%",
 "minWidth": 70,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "class": "IconButton",
 "data": {
  "name": "BOTAO FECHAR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
  "this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
  "this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
  "this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9"
 ],
 "borderSize": 0,
 "paddingRight": 40,
 "paddingLeft": 40,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "100%",
 "gap": 10,
 "paddingTop": 40,
 "paddingBottom": 40,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "shadow": false,
 "class": "Container",
 "data": {
  "name": "- Buttons set"
 },
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "maxHeight": 2268,
 "maxWidth": 400,
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "7.74%",
 "right": "0.09%",
 "borderSize": 0,
 "paddingRight": 0,
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 200,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "class": "Image",
 "data": {
  "name": "REDES VERTICAL"
 },
 "shadow": false
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Viewer 2"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "50.69%",
 "playbackBarOpacity": 1,
 "bottom": "33.47%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.facebook.com/JohnnieJackBar', '_blank')",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Viewer 2"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0.46%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "73.5%",
 "playbackBarOpacity": 1,
 "bottom": "0%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.instagram.com/johnniejackbar/', '_blank')",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Viewer 2"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
 "left": "0.41%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0.46%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "top": "28.19%",
 "playbackBarOpacity": 1,
 "bottom": "53.66%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://youtu.be/kCrHIM-LT1E', '_blank')",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "progressBackgroundColorRatios": [
  0
 ]
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Viewer 2"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "bottom": "75.29%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://api.whatsapp.com/send/?phone=5553991244664', '_blank')",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "progressBackgroundColorRatios": [
  0
 ]
}],
 "width": "100%"
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
