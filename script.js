(function(){
    var script = {
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": false,
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "start": "this.playAudioList([this.audio_0993778A_1DC1_8066_41AA_341608237604]); this.init()",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "class": "Player",
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "contentOpaque": false,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "Player1098"
 },
 "overflow": "visible",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
 "label": "010",
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
  "this.overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
  "this.overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38ACB844_2F3A_6D2B_41BD_8136E1EE5FCB",
 "initialPosition": {
  "yaw": -89.08,
  "pitch": -7.35,
  "class": "PanoramaCameraPosition"
 }
},
{
 "items": [
  {
   "media": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_167546D9_055B_9607_417E_841620224C88",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_167546D9_055B_9607_417E_841620224C88_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_1675F608_055B_9605_4148_289A093B3218_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera",
   "player": "this.MainViewerPanoramaPlayer"
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
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38CF3828_2F3A_6D7A_41BF_AFE5F9F5A3D5",
 "initialPosition": {
  "yaw": -180,
  "pitch": -11.02,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B1A2800_2F3A_6D2A_41C6_2883782AF338",
 "initialPosition": {
  "yaw": 80.82,
  "pitch": -19.29,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B04E800_2F3A_6D2A_4193_B46B56B62A80",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "id": "effect_56EFE123_05DD_AA0B_417A_2772B8D8B446",
 "easing": "quad_in",
 "duration": 1100,
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera",
 "initialPosition": {
  "yaw": 1.58,
  "pitch": 0.59,
  "class": "PanoramaCameraPosition"
 }
},
{
 "items": [
  {
   "media": "this.video_02DD7427_1F37_B477_41B7_65C40F330FB3",
   "start": "this.viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B83779C_2F3A_635A_4170_F0A814A0766B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B83779C_2F3A_635A_4170_F0A814A0766B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143VideoPlayer)",
   "player": "this.viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143VideoPlayer"
  }
 ],
 "id": "playList_3B83779C_2F3A_635A_4170_F0A814A0766B",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38B22863_2F3A_6DEE_41B0_6205356D7C28",
 "initialPosition": {
  "yaw": -41.33,
  "pitch": -16.53,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38F8481F_2F3A_6D55_41C0_2144106B5372",
 "initialPosition": {
  "yaw": -90.92,
  "pitch": -11.02,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "items": [
  {
   "media": "this.video_039BD232_1F37_8C69_4198_D62E41B974BF",
   "start": "this.viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B82379C_2F3A_635A_41B1_71A42DC2515E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B82379C_2F3A_635A_41B1_71A42DC2515E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86VideoPlayer)",
   "player": "this.viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86VideoPlayer"
  }
 ],
 "id": "playList_3B82379C_2F3A_635A_41B1_71A42DC2515E",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_05F07538_1F39_B459_41A6_C3867706CB19",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B9B579C_2F3A_635A_41BB_988F94AF3E1B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B9B579C_2F3A_635A_41BB_988F94AF3E1B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_3B9B579C_2F3A_635A_41BB_988F94AF3E1B",
 "class": "PlayList"
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
 "label": "009 copiar",
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
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
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "backgroundColorRatios": [],
 "bodyPaddingRight": 0,
 "id": "window_228FC079_2D3E_5DDD_41C1_D8CEC58BC90C",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "paddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "scrollBarColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "backgroundColor": [],
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "closeButtonBorderColor": "#FF0000",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "title": "",
 "closeButtonBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CA"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 20,
 "shadowHorizontalLength": 3,
 "shadowColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingLeft": 0,
 "titleFontStyle": "normal",
 "minHeight": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "class": "Window",
 "headerPaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "closeButtonPaddingRight": 0,
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
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
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "shadow": true,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "shadowVerticalLength": 0,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window6465"
 },
 "closeButtonBackgroundColorRatios": [
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B4497C2_2F3A_632E_41BA_AEA97A517A3C",
 "initialPosition": {
  "yaw": -137.76,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 }
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38E9A810_2F3A_6D2A_41C5_0BDB242F57BA",
 "initialPosition": {
  "yaw": -180,
  "pitch": -6.43,
  "class": "PanoramaCameraPosition"
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
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
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
 "label": "012",
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
  "this.overlay_195027C2_05E5_F605_4177_4A79943AEFCC"
 ]
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "backgroundColorRatios": [],
 "bodyPaddingRight": 0,
 "id": "window_3C1B182C_2D3A_ED7A_41A9_F3095186711B",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "paddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "scrollBarColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "backgroundColor": [],
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "closeButtonBorderColor": "#FF0000",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "title": "",
 "closeButtonBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 40,
 "shadowHorizontalLength": 3,
 "shadowColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingLeft": 0,
 "titleFontStyle": "normal",
 "minHeight": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "class": "Window",
 "headerPaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "closeButtonPaddingRight": 0,
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
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
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "shadow": true,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "shadowVerticalLength": 0,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 40,
 "data": {
  "name": "Window4428"
 },
 "closeButtonBackgroundColorRatios": [
  1
 ]
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "backgroundColorRatios": [],
 "bodyPaddingRight": 0,
 "id": "window_01383337_1F38_8C57_4150_B7C2A62B59CC",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "paddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "scrollBarColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "backgroundColor": [],
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "closeButtonBorderColor": "#FF0000",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "title": "",
 "titleFontWeight": "normal",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [],
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "headerBorderSize": 0,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 40,
 "shadowHorizontalLength": 3,
 "shadowColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingLeft": 0,
 "titleFontStyle": "normal",
 "minHeight": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "class": "Window",
 "headerPaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "closeButtonPaddingRight": 0,
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
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
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "shadow": true,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "shadowVerticalLength": 0,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 40,
 "data": {
  "name": "Window6249"
 },
 "closeButtonBackgroundColorRatios": [
  1
 ]
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
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_0993778A_1DC1_8066_41AA_341608237604.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_0993778A_1DC1_8066_41AA_341608237604.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_0993778A_1DC1_8066_41AA_341608237604",
 "data": {
  "label": "y2mate.com - Chuck Berry  Johnny B Goode Remastered"
 }
},
{
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in",
 "to": "left",
 "duration": 400,
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38DEA832_2F3A_6D6E_41C3_F532CBEB953E",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "id": "effect_706911C3_05BA_EA04_4193_07910AFBC595",
 "easing": "quad_in",
 "to": "left",
 "duration": 400,
 "class": "SlideOutEffect"
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
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
 "label": "006",
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
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
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
 "label": "002 copiar",
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
  "this.overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
  "this.overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
  "this.overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6",
  "this.overlay_22547FB4_2D3A_236A_41AE_60E51DFB4D36"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B70C7C2_2F3A_632E_41C3_B429EA519601",
 "initialPosition": {
  "yaw": -82.65,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 }
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
 "from": "right",
 "id": "effect_671F5FB9_05AA_B607_4186_4F9D961227F2",
 "easing": "linear",
 "duration": 0,
 "class": "SlideInEffect"
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
 "label": "013",
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
  "this.overlay_19469E19_05E5_9604_418A_081538C24A34"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
 "label": "004 copiar",
 "id": "panorama_167546D9_055B_9607_417E_841620224C88",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
  "this.overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
  "this.overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
  "this.overlay_11C844E8_1C40_81A3_41BD_135085A6CD77"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B5FE7D1_2F3A_632A_41BB_4195D331AF85",
 "initialPosition": {
  "yaw": 72.55,
  "pitch": -11.94,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B5397E1_2F3A_62EA_41B8_010E6B7C5964",
 "initialPosition": {
  "yaw": 180,
  "pitch": -1.84,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B2037E1_2F3A_62EA_41C1_FCF1F10A09AD",
 "initialPosition": {
  "yaw": 4.59,
  "pitch": -11.02,
  "class": "PanoramaCameraPosition"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -4.27,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": -3.53,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "initialPosition": {
  "yaw": -4.27,
  "pitch": -3.53,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_camera",
 "initialPosition": {
  "yaw": -1.19,
  "pitch": -0.79,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
 "label": "008",
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
  "this.overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
  "this.overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
  "this.overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51",
  "this.overlay_11602292_1C40_8067_41BB_2E6F1F452D7E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_386798A2_2F3A_6D6E_41C5_7C51F287D23A",
 "initialPosition": {
  "yaw": 77.14,
  "pitch": -13.78,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
 "label": "007 copiar",
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
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
 "from": "left",
 "id": "effect_6AAC9764_05BF_960D_4167_B79BED30937C",
 "easing": "quad_in",
 "duration": 400,
 "class": "SlideInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B7877AB_2F3A_637D_41BC_652D5D36344A",
 "initialPosition": {
  "yaw": -112.96,
  "pitch": -0.92,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg",
 "label": "005 copiar",
 "id": "panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
  "this.overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
  "this.overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
  "this.overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2",
  "this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784",
  "this.overlay_2393D3A0_2D37_E36B_4197_5AAD17A3B07D",
  "this.overlay_224A2CFD_2D36_26DA_41B5_FDF5133D1587",
  "this.overlay_3C5B1CD3_2F2A_252E_41AC_7A9F8DB86E33"
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg",
 "label": "001...LEG",
 "id": "panorama_095A0530_1DC3_80A3_412A_AF15322D2880",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA",
  "this.overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
  "this.overlay_095AB540_1DC3_80E2_41A9_F907CE185EDF",
  "this.overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_38BC184E_2F3A_6D37_41A2_47C5C7488586",
 "initialPosition": {
  "yaw": -180,
  "pitch": -9.18,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3891D88D_2F3A_6D35_41C5_985541B3F8BA",
 "initialPosition": {
  "yaw": 70.71,
  "pitch": -11.94,
  "class": "PanoramaCameraPosition"
 }
},
{
 "items": [
  {
   "media": "this.video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F",
   "start": "this.viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B83A79C_2F3A_635A_41C5_6D4183D80BEF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B83A79C_2F3A_635A_41C5_6D4183D80BEF, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5AVideoPlayer)",
   "player": "this.viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5AVideoPlayer"
  }
 ],
 "id": "playList_3B83A79C_2F3A_635A_41C5_6D4183D80BEF",
 "class": "PlayList"
},
{
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingBottom": 0,
 "backgroundColorRatios": [],
 "bodyPaddingRight": 0,
 "id": "window_3A907106_2F16_3F36_4187_700F39F99C49",
 "bodyBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "paddingRight": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "scrollBarColor": "#000000",
 "headerVerticalAlign": "middle",
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "modal": true,
 "backgroundColor": [],
 "veilColorDirection": "horizontal",
 "titleFontSize": "1.29vmin",
 "bodyPaddingBottom": 0,
 "closeButtonBorderColor": "#FF0000",
 "headerBackgroundColorDirection": "vertical",
 "height": 600,
 "shadowSpread": 1,
 "title": "",
 "closeButtonBackgroundColorDirection": "horizontal",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "footerBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "footerHeight": 5,
 "closeButtonPressedBackgroundColor": [],
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 0,
 "closeButtonPressedIconLineWidth": 3,
 "propagateClick": false,
 "footerBackgroundColorDirection": "vertical",
 "children": [
  "this.viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5A"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titlePaddingRight": 5,
 "closeButtonIconHeight": 40,
 "shadowHorizontalLength": 3,
 "shadowColor": "#000000",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "borderSize": 0,
 "paddingLeft": 0,
 "titleFontStyle": "normal",
 "minHeight": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "class": "Window",
 "headerPaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#FF0000",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "closeButtonPaddingRight": 0,
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonPaddingLeft": 0,
 "closeButtonPaddingBottom": 0,
 "headerPaddingLeft": 10,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
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
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "paddingTop": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 0,
 "closeButtonIconLineWidth": 2,
 "shadow": true,
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "shadowVerticalLength": 0,
 "titlePaddingBottom": 5,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 40,
 "data": {
  "name": "Window10826"
 },
 "closeButtonBackgroundColorRatios": [
  0.98
 ]
},
{
 "class": "Video",
 "label": "DRINKS",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F",
 "height": 360,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_04D7D61C_1F37_B459_41B4_9025DA67A495",
   "start": "this.viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3B87079C_2F3A_635A_41C2_14EEA90F2B27, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3B87079C_2F3A_635A_41C2_14EEA90F2B27, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CAVideoPlayer)",
   "player": "this.viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CAVideoPlayer"
  }
 ],
 "id": "playList_3B87079C_2F3A_635A_41C2_14EEA90F2B27",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3B34A7F0_2F3A_62EB_41BE_69E8E2EE85D4",
 "initialPosition": {
  "yaw": 37.65,
  "pitch": 1.84,
  "class": "PanoramaCameraPosition"
 }
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
 "label": "011 copiar",
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
  "this.overlay_1978731D_05E5_6E3F_4191_617BBE176123",
  "this.overlay_1AF25F56_05E5_960C_417A_214619834776",
  "this.overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
  "this.overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4"
 ]
},
{
 "hfovMin": "150%",
 "hfov": 360,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
 "label": "003 copiar",
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_167546D9_055B_9607_417E_841620224C88",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
  "this.overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
  "this.overlay_132E8F63_05AD_960B_4182_A0BB34998BEF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_3881A879_2F3A_6DDA_41C5_16B6C49CD424",
 "initialPosition": {
  "yaw": 86.33,
  "pitch": -2.76,
  "class": "PanoramaCameraPosition"
 }
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
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "left": "0%",
 "paddingRight": 0,
 "width": 327.9,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "overflow": "scroll",
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "left": "0%",
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "paddingLeft": 0,
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "minHeight": 1,
 "class": "Image",
 "top": "0%",
 "minWidth": 1,
 "horizontalAlign": "center",
 "height": "100%",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fill",
 "borderRadius": 0,
 "data": {
  "name": "FUNDO PRETO"
 },
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "maxHeight": 801,
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "10%",
 "paddingRight": 0,
 "right": "8.7%",
 "borderSize": 0,
 "paddingLeft": 0,
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "minHeight": 600,
 "class": "Image",
 "top": "5%",
 "bottom": "10.22%",
 "minWidth": 600,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false)",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "TEXTO INICIAL"
 },
 "maxWidth": 1000,
 "paddingBottom": 0
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "paddingRight": 0,
 "right": "9.23%",
 "width": 80,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "class": "IconButton",
 "top": "3.28%",
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "minWidth": 0,
 "mode": "toggle",
 "height": 74,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "data": {
  "name": "MUTE"
 },
 "cursor": "hand",
 "paddingBottom": 0
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_38BC184E_2F3A_6D37_41A2_47C5C7488586); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.13,
   "image": "this.AnimatedImageResource_08201A51_1F28_9C2B_41A5_906DDCFBFF9E",
   "pitch": -29.5,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
 "maps": [
  {
   "hfov": 28.13,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_113BC334_1C41_80A3_419D_D89D2DFB0D03",
 "bleaching": 0.7,
 "pitch": 65.08,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -175.05,
 "bleachingDistance": 0.4
},
{
 "viewerArea": "this.viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143",
 "displayPlaybackBar": true,
 "id": "viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143VideoPlayer",
 "class": "VideoPlayer"
},
{
 "viewerArea": "this.viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86",
 "displayPlaybackBar": true,
 "id": "viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86VideoPlayer",
 "class": "VideoPlayer"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.8,
   "image": "this.AnimatedImageResource_0821AA51_1F28_9C2B_41A0_5B8D948BF483",
   "pitch": -15.95,
   "yaw": 6.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
 "maps": [
  {
   "hfov": 24.8,
   "yaw": 6.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_3B1A2800_2F3A_6D2A_41C6_2883782AF338); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.95,
   "image": "this.AnimatedImageResource_08215A51_1F28_9C2B_418A_24DA271A62A9",
   "pitch": -21.68,
   "yaw": 93.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
 "maps": [
  {
   "hfov": 21.95,
   "yaw": 93.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.36,
   "image": "this.AnimatedImageResource_08217A51_1F28_9C2B_41B7_6B9C3C3BDBFB",
   "pitch": -13.38,
   "yaw": -84.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1898879C_05E6_F63D_4170_66ECE8880613",
 "maps": [
  {
   "hfov": 18.36,
   "yaw": -84.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_38E9A810_2F3A_6D2A_41C5_0BDB242F57BA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.86,
   "image": "this.AnimatedImageResource_08212A51_1F28_9C2B_41A5_7C1828270744",
   "pitch": -14.36,
   "yaw": -176.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19A5772E_05E6_B61C_415F_7028C1939683",
 "maps": [
  {
   "hfov": 18.86,
   "yaw": -176.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11D2095E_1C41_809F_41B8_C294BD237B79",
 "bleaching": 0.7,
 "pitch": 62.51,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -65.47,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_11CF4C1F_1C41_809D_41BE_3FF96C7D50B9",
 "bleaching": 0.7,
 "pitch": 47.87,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -153.3,
 "bleachingDistance": 0.4
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CA",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea14842"
 }
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_3B5FE7D1_2F3A_632A_41BB_4195D331AF85); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.47,
   "image": "this.AnimatedImageResource_08230A51_1F28_9C2B_41A5_B71633CDC21B",
   "pitch": -35.03,
   "yaw": 164.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_195027C2_05E5_F605_4177_4A79943AEFCC",
 "maps": [
  {
   "hfov": 26.47,
   "yaw": 164.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid3B83379C_2F3A_635A_41BE_CC2E988B3143",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea14844"
 }
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid3B82979C_2F3A_635A_41BA_81E6B897BC86",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea14843"
 }
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.95,
   "image": "this.AnimatedImageResource_0821EA51_1F28_9C2B_41A2_C7E9006C282D",
   "pitch": -22.38,
   "yaw": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
 "maps": [
  {
   "hfov": 24.95,
   "yaw": 4.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C, this.camera_38ACB844_2F3A_6D2B_41BD_8136E1EE5FCB); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.1,
   "image": "this.AnimatedImageResource_08218A51_1F28_9C2B_41B2_7BC962C8F5F6",
   "pitch": -11.68,
   "yaw": 175.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
 "maps": [
  {
   "hfov": 24.1,
   "yaw": 175.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11D14F06_1C40_806F_41A5_E686DA55E819",
 "bleaching": 0.7,
 "pitch": 60.53,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -38.77,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_11C7B8B0_1C41_81A3_41B3_78D1EDBFEF2C",
 "bleaching": 0.7,
 "pitch": 53.21,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 139.25,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_11315F1B_1C41_8065_41BC_97C4A090EED6",
 "bleaching": 0.7,
 "pitch": 57.56,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -160.81,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.97,
   "image": "this.AnimatedImageResource_0827FA51_1F28_9C2B_41B5_AF9D73AD1EF2",
   "pitch": -26.33,
   "yaw": -70.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
 "maps": [
  {
   "hfov": 28.97,
   "yaw": -70.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.99,
   "image": "this.AnimatedImageResource_08279A51_1F28_9C2B_41BA_04B637901E76",
   "pitch": -18.32,
   "yaw": 166.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
 "maps": [
  {
   "hfov": 25.99,
   "yaw": 166.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11D6CF3D_1C40_809D_41B1_60CD18728FA6",
 "bleaching": 0.7,
 "pitch": 33.23,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -137.87,
 "bleachingDistance": 0.4
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_228FC079_2D3E_5DDD_41C1_D8CEC58BC90C, this.video_04D7D61C_1F37_B459_41B4_9025DA67A495, this.playList_3B87079C_2F3A_635A_41C2_14EEA90F2B27, '90%', '90%', false, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.19,
   "image": "this.AnimatedImageResource_3E96E111_2DE9_FF2D_41BE_C825853647F3",
   "pitch": -11.15,
   "yaw": 26.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_22547FB4_2D3A_236A_41AE_60E51DFB4D36",
 "maps": [
  {
   "hfov": 18.19,
   "yaw": 26.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_3B4497C2_2F3A_632E_41BA_AEA97A517A3C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.62,
   "image": "this.AnimatedImageResource_0822CA51_1F28_9C2B_41A3_34596F035830",
   "pitch": -31.28,
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19469E19_05E5_9604_418A_081538C24A34",
 "maps": [
  {
   "hfov": 27.62,
   "yaw": -123.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C, this.camera_38DEA832_2F3A_6D6E_41C3_F532CBEB953E); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.25,
   "image": "this.AnimatedImageResource_3E9BF113_2DE9_FF2D_41A0_85C8218C9237",
   "pitch": -19.11,
   "yaw": 78.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
 "maps": [
  {
   "hfov": 23.25,
   "yaw": 78.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5, this.camera_38CF3828_2F3A_6D7A_41BF_AFE5F9F5A3D5); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.2,
   "image": "this.AnimatedImageResource_0826EA51_1F28_9C2B_41BB_AC0A679E0C9D",
   "pitch": -19.51,
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
 "maps": [
  {
   "hfov": 23.2,
   "yaw": -179.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11C844E8_1C40_81A3_41BD_135085A6CD77",
 "bleaching": 0.7,
 "pitch": 32.44,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -103.65,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_3B70C7C2_2F3A_632E_41C3_B429EA519601); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.31,
   "image": "this.AnimatedImageResource_08208A51_1F28_9C2B_41A8_2E49827F94A8",
   "pitch": -19.41,
   "yaw": -135.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
 "maps": [
  {
   "hfov": 27.31,
   "yaw": -135.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_3B7877AB_2F3A_637D_41BC_652D5D36344A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.18,
   "image": "this.AnimatedImageResource_0820BA51_1F28_9C2B_41B7_CF5FFEF771F6",
   "pitch": -21.39,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
 "maps": [
  {
   "hfov": 22.18,
   "yaw": 179.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_110F2B5E_1C4F_809F_41AF_3F65CE49FF51",
 "bleaching": 0.7,
 "pitch": 10.29,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 43.32,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_11602292_1C40_8067_41BB_2E6F1F452D7E",
 "bleaching": 0.7,
 "pitch": 26.11,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -134.9,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.35,
   "image": "this.AnimatedImageResource_08265A51_1F28_9C2B_41B8_89B26BF86ADF",
   "pitch": -24.75,
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
 "maps": [
  {
   "hfov": 29.35,
   "yaw": 4.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_3B34A7F0_2F3A_62EB_41BE_69E8E2EE85D4); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.05,
   "image": "this.AnimatedImageResource_08260A51_1F28_9C2B_41B9_C4F258495388",
   "pitch": -11.89,
   "yaw": -58.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
 "maps": [
  {
   "hfov": 19.05,
   "yaw": -58.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_3B2037E1_2F3A_62EA_41C1_FCF1F10A09AD); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.78,
   "image": "this.AnimatedImageResource_08262A51_1F28_9C2B_41B5_918590B790BA",
   "pitch": -20.6,
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
 "maps": [
  {
   "hfov": 23.78,
   "yaw": 49.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E, this.camera_3B5397E1_2F3A_62EA_41B8_010E6B7C5964); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.22,
   "image": "this.AnimatedImageResource_0821CA51_1F28_9C2B_4192_DE809899A76C",
   "pitch": -20.79,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
 "maps": [
  {
   "hfov": 30.22,
   "yaw": -179.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11CCCEEE_1C41_81BF_419E_4996AF0BE249",
 "bleaching": 0.7,
 "pitch": 65.27,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -59.93,
 "bleachingDistance": 0.4
},
{
 "id": "overlay_1134A905_1C41_806D_41B4_6660D1FB3557",
 "bleaching": 0.7,
 "pitch": 48.86,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -163.98,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_3C33D44F_1DC0_80FD_41B6_2C06A3784064",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_167546D9_055B_9607_417E_841620224C88, this.camera_38F8481F_2F3A_6D55_41C0_2144106B5372); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.77,
   "image": "this.AnimatedImageResource_0826BA51_1F28_9C2B_41A2_3A1FDD48A333",
   "pitch": -17.83,
   "yaw": 172.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C33A44F_1DC0_80FD_41BC_FA664A5E5835",
 "maps": [
  {
   "hfov": 30.77,
   "yaw": 172.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.9,
   "image": "this.AnimatedImageResource_08265A51_1F28_9C2B_41B6_E8C36FCD6FA7",
   "pitch": -17.03,
   "yaw": 84.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C33644F_1DC0_80FD_41BB_2C1F9782A8B2",
 "maps": [
  {
   "hfov": 30.9,
   "yaw": 84.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_3C33744F_1DC0_80FD_41B1_65F3384181E2",
 "bleaching": 0.7,
 "pitch": 69.63,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 128.77,
 "bleachingDistance": 0.4
},
{
 "blending": 0,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 800,
  "mp4Url": "media/video_05F07538_1F39_B459_41A6_C3867706CB19.mp4"
 },
 "hfov": 24.42,
 "id": "overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784_t.jpg",
    "width": 640,
    "height": 800,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 24.15,
 "useHandCursor": true,
 "yaw": -80.33,
 "rotationY": 8.84,
 "rotationX": -25.89,
 "click": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') != 'playing'){ this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.play(); } else { this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.pause(); }",
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "roll": -5.53,
 "distance": 50,
 "vfov": 13.39,
 "stateChange": "if(this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784', [this.overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784]); } else { this.resumeGlobalAudios('overlay_0407BA23_1F39_9C6F_41A9_0F17CD06C784'); }",
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_01383337_1F38_8C57_4150_B7C2A62B59CC, this.video_039BD232_1F37_8C69_4198_D62E41B974BF, this.playList_3B82379C_2F3A_635A_41B1_71A42DC2515E, '90%', '90%', false, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.37,
   "image": "this.AnimatedImageResource_3E998114_2DE9_FF2B_41A3_F579CBB4532E",
   "pitch": 3.57,
   "yaw": -112.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2393D3A0_2D37_E36B_4197_5AAD17A3B07D",
 "maps": [
  {
   "hfov": 13.37,
   "yaw": -112.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_3C1B182C_2D3A_ED7A_41A9_F3095186711B, this.video_02DD7427_1F37_B477_41B7_65C40F330FB3, this.playList_3B83779C_2F3A_635A_4170_F0A814A0766B, '90%', '90%', false, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.38,
   "image": "this.AnimatedImageResource_3E9E9116_2DE9_FF57_41A0_FED08D946E1A",
   "pitch": 2.2,
   "yaw": -91.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_224A2CFD_2D36_26DA_41B5_FDF5133D1587",
 "maps": [
  {
   "hfov": 13.38,
   "yaw": -91.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_3A907106_2F16_3F36_4187_700F39F99C49, this.video_3DB5CC5F_2F29_E5D6_41C1_C2BB2609E41F, this.playList_3B83A79C_2F3A_635A_41C5_6D4183D80BEF, '90%', '90%', false, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.05,
   "image": "this.AnimatedImageResource_3DECC830_2F16_2D6B_4192_2FADAB0F720E",
   "pitch": -13.03,
   "yaw": -42.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C5B1CD3_2F2A_252E_41AC_7A9F8DB86E33",
 "maps": [
  {
   "hfov": 13.05,
   "yaw": -42.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "id": "panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_3B04E800_2F3A_6D2A_4193_B46B56B62A80); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.22,
   "image": "this.AnimatedImageResource_082A0A51_1F28_9C2B_419A_3CF380FCC85A",
   "pitch": -18,
   "yaw": -19.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_095AA540_1DC3_80E2_41A8_CDDD0A853FC4",
 "maps": [
  {
   "hfov": 23.22,
   "yaw": -19.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_2_0.png",
      "width": 164,
      "height": 214,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 33.37,
   "yaw": -58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_095AB540_1DC3_80E2_41A9_F907CE185EDF",
 "data": {
  "label": "Imagem"
 },
 "maps": [
  {
   "hfov": 9.17,
   "yaw": -58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 33.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_095AF540_1DC3_80E2_41A8_26D2A48266EE",
 "bleaching": 0.7,
 "pitch": 40.75,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -110.18,
 "bleachingDistance": 0.4
},
{
 "viewerArea": "this.viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5A",
 "displayPlaybackBar": true,
 "id": "viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5AVideoPlayer",
 "class": "VideoPlayer"
},
{
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uid3B9C679C_2F3A_635A_41B2_02740E8D9D5A",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "data": {
  "name": "ViewerArea14845"
 }
},
{
 "viewerArea": "this.viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CA",
 "displayPlaybackBar": true,
 "id": "viewer_uid3B87379C_2F3A_635A_41BD_D3247EC2F5CAVideoPlayer",
 "class": "VideoPlayer"
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C, this.camera_38B22863_2F3A_6DEE_41B0_6205356D7C28); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.47,
   "image": "this.AnimatedImageResource_0823EA51_1F28_9C2B_41AB_C1BE9931B16C",
   "pitch": -38,
   "yaw": -94.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1978731D_05E5_6E3F_4191_617BBE176123",
 "maps": [
  {
   "hfov": 25.47,
   "yaw": -94.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5, this.camera_3881A879_2F3A_6DDA_41C5_16B6C49CD424); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.66,
   "image": "this.AnimatedImageResource_08238A51_1F28_9C2B_41B3_2B9031C30E4F",
   "pitch": -34.44,
   "yaw": 65.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1AF25F56_05E5_960C_417A_214619834776",
 "maps": [
  {
   "hfov": 26.66,
   "yaw": 65.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_3891D88D_2F3A_6D35_41C5_985541B3F8BA); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.38,
   "image": "this.AnimatedImageResource_0823AA51_1F28_9C2B_41B4_3940BBC6814B",
   "pitch": -13.57,
   "yaw": 169.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
 "maps": [
  {
   "hfov": 22.38,
   "yaw": 169.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "id": "overlay_11C54165_1C41_80A2_41BE_7EF6BD46D2D4",
 "bleaching": 0.7,
 "pitch": 80.51,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -26.9,
 "bleachingDistance": 0.4
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_095A8540_1DC3_80E2_41AB_151CDEF326EA.png",
    "width": 1000,
    "height": 1000,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.14,
   "image": "this.AnimatedImageResource_3E9B5113_2DE9_FF2D_41B7_21458FD29EEE",
   "pitch": -21.19,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
 "maps": [
  {
   "hfov": 30.14,
   "yaw": -1.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0_HS_0_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_386798A2_2F3A_6D6E_41C5_7C51F287D23A); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.35,
   "image": "this.AnimatedImageResource_08270A51_1F28_9C2B_41BE_FAE4E74AC39B",
   "pitch": -24.75,
   "yaw": -171.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_132E8F63_05AD_960B_4182_A0BB34998BEF",
 "maps": [
  {
   "hfov": 29.35,
   "yaw": -171.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "left": "0%",
 "paddingRight": 0,
 "width": 90,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "COLUNINHA"
 },
 "overflow": "scroll",
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "paddingRight": 0,
 "right": 0,
 "width": 330,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "overflow": "visible",
 "paddingBottom": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08201A51_1F28_9C2B_41A5_906DDCFBFF9E",
 "levels": [
  {
   "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0821AA51_1F28_9C2B_41A0_5B8D948BF483",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08215A51_1F28_9C2B_418A_24DA271A62A9",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08217A51_1F28_9C2B_41B7_6B9C3C3BDBFB",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_2_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08212A51_1F28_9C2B_41A5_7C1828270744",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_1_HS_3_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08230A51_1F28_9C2B_41A5_B71633CDC21B",
 "levels": [
  {
   "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0821EA51_1F28_9C2B_41A2_C7E9006C282D",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08218A51_1F28_9C2B_41B2_7BC962C8F5F6",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0827FA51_1F28_9C2B_41B5_AF9D73AD1EF2",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08279A51_1F28_9C2B_41BA_04B637901E76",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E96E111_2DE9_FF2D_41BE_C825853647F3",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0_HS_2_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0822CA51_1F28_9C2B_41A3_34596F035830",
 "levels": [
  {
   "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E9BF113_2DE9_FF2D_41A0_85C8218C9237",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0826EA51_1F28_9C2B_41BB_AC0A679E0C9D",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08208A51_1F28_9C2B_41A8_2E49827F94A8",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0820BA51_1F28_9C2B_41B7_CF5FFEF771F6",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08265A51_1F28_9C2B_41B8_89B26BF86ADF",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08260A51_1F28_9C2B_41B9_C4F258495388",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08262A51_1F28_9C2B_41B5_918590B790BA",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_2_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0821CA51_1F28_9C2B_4192_DE809899A76C",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_1_HS_3_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0826BA51_1F28_9C2B_41A2_3A1FDD48A333",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08265A51_1F28_9C2B_41B6_E8C36FCD6FA7",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E998114_2DE9_FF2B_41A3_F579CBB4532E",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_4_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E9E9116_2DE9_FF57_41A0_FED08D946E1A",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_5_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DECC830_2F16_2D6B_4192_2FADAB0F720E",
 "levels": [
  {
   "url": "media/panorama_3C33C44F_1DC0_80FD_417D_2D9789B0CA1C_0_HS_6_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_082A0A51_1F28_9C2B_419A_3CF380FCC85A",
 "levels": [
  {
   "url": "media/panorama_095A0530_1DC3_80A3_412A_AF15322D2880_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0823EA51_1F28_9C2B_41AB_C1BE9931B16C",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08238A51_1F28_9C2B_41B3_2B9031C30E4F",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_0823AA51_1F28_9C2B_41B4_3940BBC6814B",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_1_HS_2_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E9B5113_2DE9_FF2D_41B7_21458FD29EEE",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0_HS_0_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_08270A51_1F28_9C2B_41BE_FAE4E74AC39B",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "propagateClick": true,
 "paddingRight": 0,
 "width": 36,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "paddingBottom": 0
},
{
 "cursor": "hand",
 "propagateClick": true,
 "maxHeight": 80,
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "paddingRight": 0,
 "width": 70,
 "borderSize": 0,
 "paddingLeft": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "class": "IconButton",
 "top": "40%",
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "BOT\u00c3O ABRIR"
 },
 "maxWidth": 70,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "90%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "data": {
  "name": "Container"
 },
 "overflow": "scroll",
 "paddingBottom": 0
},
{
 "cursor": "hand",
 "propagateClick": true,
 "maxHeight": 50,
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "paddingRight": 0,
 "right": 9,
 "width": 70,
 "borderSize": 0,
 "paddingLeft": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "class": "IconButton",
 "top": "40%",
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "bottom": "40%",
 "minWidth": 70,
 "mode": "push",
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "data": {
  "name": "BOTAO FECHAR"
 },
 "maxWidth": 70,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "propagateClick": true,
 "paddingRight": 40,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "paddingLeft": 40,
 "minHeight": 1,
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
  "this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
  "this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
  "this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9"
 ],
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 40,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "data": {
  "name": "- Buttons set"
 },
 "overflow": "scroll",
 "paddingBottom": 40
},
{
 "propagateClick": false,
 "maxHeight": 2268,
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "7.74%",
 "paddingRight": 0,
 "right": "0.09%",
 "borderSize": 0,
 "paddingLeft": 0,
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "minHeight": 1,
 "class": "Image",
 "top": "0%",
 "bottom": "0%",
 "minWidth": 200,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "data": {
  "name": "REDES VERTICAL"
 },
 "maxWidth": 400,
 "paddingBottom": 0
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
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "50.69%",
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": "33.47%",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.facebook.com/JohnnieJackBar', '_blank')",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
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
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0.46%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "73.5%",
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": "0%",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://www.instagram.com/johnniejackbar/', '_blank')",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
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
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0.46%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "top": "28.19%",
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": "53.66%",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://youtu.be/kCrHIM-LT1E', '_blank')",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
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
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "right": "0%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "bottom": "75.29%",
 "minWidth": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "click": "this.openLink('https://api.whatsapp.com/send/?phone=5553991244664', '_blank')",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "shadow": false,
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
 "paddingBottom": 0,
 "progressBackgroundColorRatios": [
  0
 ]
}],
 "paddingBottom": 0
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
