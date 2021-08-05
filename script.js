(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.playAudioList([this.audio_1F839F78_0D60_93DF_419A_DEE055F7FF09]); this.init()",
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
  "this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
  "this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
  "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017"
 ],
 "buttonToggleMute": "this.IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_24987EE8_15BE_A7F5_41A8_075C8EDE71D7"
},
{
 "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
 "partial": false,
 "label": "007 copiar",
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
  "this.overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
  "this.overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
  "this.overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
  "this.overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "easing": "quad_in",
 "id": "effect_6AAC9764_05BF_960D_4167_B79BED30937C",
 "class": "SlideInEffect",
 "duration": 400,
 "from": "left"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -19.29
 },
 "id": "camera_24C70F1B_15BE_A64B_41B4_062D7828C05C"
},
{
 "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
 "partial": false,
 "label": "006",
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675D659_055B_F607_4181_84BFD3027F08"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
  "this.overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
  "this.overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer"
},
{
 "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
 "partial": false,
 "label": "008",
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
  "this.overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
  "this.overlay_1A4695B8_05E7_6A04_417F_64AE43076179"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "id": "camera_24135F3A_15BE_A655_41A0_CCBADC6F1310"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -9.18
 },
 "id": "camera_3B43AEC0_15BE_A636_419A_0E586EE348C0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -137.76,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_3B4F6EC0_15BE_A636_41AE_650835C7121D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_3B306E92_15BE_A655_41B2_8CB4E46338BA"
},
{
 "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
 "partial": false,
 "label": "004 copiar",
 "id": "panorama_167546D9_055B_9607_417E_841620224C88",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_167546D9_055B_9607_417E_841620224C88_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
  "this.overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
  "this.overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "mouseControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
 "partial": false,
 "label": "003 copiar",
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
  "this.overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
  "this.overlay_132E8F63_05AD_960B_4182_A0BB34998BEF"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_375560DD_15A9_BBCF_41B4_0F99E2B1B7A6",
 "closeButtonPaddingLeft": 0,
 "horizontalAlign": "center",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "class": "Window",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "closeButtonIconWidth": 20,
 "title": "",
 "backgroundColor": [],
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 4,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54A"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "minWidth": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#FF0000",
 "layout": "vertical",
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "data": {
  "name": "Window16590"
 },
 "closeButtonBackgroundColorRatios": [
  0.91
 ],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.65,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_3B69FEE0_15BE_A7F5_41A7_9E03BD443606"
},
{
 "thumbnailUrl": "media/video_353B3DB7_156A_AA5B_41A7_8E09A829B66F_t.jpg",
 "label": "173461758_476443346892568_4273376163132739891_n (1)",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_353B3DB7_156A_AA5B_41A7_8E09A829B66F",
 "class": "Video",
 "height": 1280,
 "video": {
  "mp4Url": "media/video_353B3DB7_156A_AA5B_41A7_8E09A829B66F.mp4",
  "width": 720,
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "items": [
  {
   "media": "this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0",
   "start": "this.viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3BE36E6C_15BE_A6CD_41A1_58E60D147017, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3BE36E6C_15BE_A6CD_41A1_58E60D147017, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1BVideoPlayer)",
   "player": "this.viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1BVideoPlayer"
  }
 ],
 "id": "playList_3BE36E6C_15BE_A6CD_41A1_58E60D147017",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_3510C3B7_159F_9E5B_41A1_6A14674B680E_t.jpg",
 "label": "185764458_865219110726229_450831793596833407_n",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_3510C3B7_159F_9E5B_41A1_6A14674B680E",
 "class": "Video",
 "height": 1280,
 "video": {
  "mp4Url": "media/video_3510C3B7_159F_9E5B_41A1_6A14674B680E.mp4",
  "width": 720,
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "yaw": -4.27,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "yaw": -4.27,
  "class": "PanoramaCameraPosition",
  "pitch": -3.53
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "targetPitch": -3.53,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0
  }
 ],
 "id": "panorama_10349A20_055B_9E04_4165_24D1F907E1A8_camera"
},
{
 "items": [
  {
   "media": "this.video_353B3DB7_156A_AA5B_41A7_8E09A829B66F",
   "start": "this.viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3BE02E6C_15BE_A6CD_41AB_D572DEFC261F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3BE02E6C_15BE_A6CD_41AB_D572DEFC261F, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54AVideoPlayer)",
   "player": "this.viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54AVideoPlayer"
  }
 ],
 "id": "playList_3BE02E6C_15BE_A6CD_41AB_D572DEFC261F",
 "class": "PlayList"
},
{
 "easing": "quad_in",
 "to": "left",
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "class": "SlideOutEffect",
 "duration": 400
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "id": "camera_24F17F25_15BE_A67E_41B1_6CBECE4C9EC3"
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_37D6219A_15A6_BA55_4192_701B72F825D7",
 "closeButtonPaddingLeft": 0,
 "horizontalAlign": "center",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "class": "Window",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "closeButtonIconWidth": 20,
 "title": "",
 "backgroundColor": [],
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 4,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9D"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "minWidth": 20,
 "titleFontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#FF0000",
 "layout": "vertical",
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "data": {
  "name": "Window17414"
 },
 "closeButtonBackgroundColorRatios": [
  0.98
 ],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0_t.jpg",
 "label": "203826835_488429632379330_2812725763305717836_n",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0",
 "class": "Video",
 "height": 1280,
 "video": {
  "mp4Url": "media/video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0.mp4",
  "width": 720,
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "items": [
  {
   "media": "this.video_369F61AB_159F_9A4B_41A2_9E4E787204BE",
   "start": "this.viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_3BE1EE6C_15BE_A6CD_4183_D8E30BCF4E91, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_3BE1EE6C_15BE_A6CD_4183_D8E30BCF4E91, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9DVideoPlayer)",
   "player": "this.viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9DVideoPlayer"
  }
 ],
 "id": "playList_3BE1EE6C_15BE_A6CD_4183_D8E30BCF4E91",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_10349A20_055B_9E04_4165_24D1F907E1A8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_10349A20_055B_9E04_4165_24D1F907E1A8_camera",
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
   "media": "this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE_camera",
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
   "media": "this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_353B3DB7_156A_AA5B_41A7_8E09A829B66F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_3104AFE6_159F_A5FD_41B2_124A097D4562",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_369F61AB_159F_9A4B_41A2_9E4E787204BE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_3510C3B7_159F_9E5B_41A1_6A14674B680E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_35102586_159F_9A3D_41A9_9E4525FC2E66",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.19,
  "class": "PanoramaCameraPosition",
  "pitch": -0.79
 },
 "id": "panorama_16571ED8_055B_9605_416D_5BA6515F53AE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.33,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_24A4CF07_15BE_A63B_419D_1101EAA3F2E4"
},
{
 "thumbnailUrl": "media/video_3104AFE6_159F_A5FD_41B2_124A097D4562_t.jpg",
 "label": "104750732_110830020527595_6065177713522278850_n",
 "scaleMode": "fit_inside",
 "width": 640,
 "loop": false,
 "id": "video_3104AFE6_159F_A5FD_41B2_124A097D4562",
 "class": "Video",
 "height": 800,
 "video": {
  "mp4Url": "media/video_3104AFE6_159F_A5FD_41B2_124A097D4562.mp4",
  "width": 640,
  "class": "VideoResource",
  "height": 800
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.08,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_3B3D9EA1_15BE_A677_418C_C5D844A45FEB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "id": "camera_24D76F11_15BE_A657_4146_648BDF8A93BF"
},
{
 "thumbnailUrl": "media/video_35102586_159F_9A3D_41A9_9E4525FC2E66_t.jpg",
 "label": "203826835_488429632379330_2812725763305717836_n",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_35102586_159F_9A3D_41A9_9E4525FC2E66",
 "class": "Video",
 "height": 1280,
 "video": {
  "mp4Url": "media/video_35102586_159F_9A3D_41A9_9E4525FC2E66.mp4",
  "width": 720,
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "easing": "quad_in",
 "to": "left",
 "id": "effect_706911C3_05BA_EA04_4193_07910AFBC595",
 "class": "SlideOutEffect",
 "duration": 400
},
{
 "thumbnailUrl": "media/video_369F61AB_159F_9A4B_41A2_9E4E787204BE_t.jpg",
 "label": "169825792_757473538300664_3693910845164242875_n",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_369F61AB_159F_9A4B_41A2_9E4E787204BE",
 "class": "Video",
 "height": 1280,
 "video": {
  "mp4Url": "media/video_369F61AB_159F_9A4B_41A2_9E4E787204BE.mp4",
  "width": 720,
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_0214FCC1_156E_6A37_41B0_5957189976D4",
 "closeButtonPaddingLeft": 0,
 "horizontalAlign": "center",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "closeButtonPressedBorderSize": 0,
 "class": "Window",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "bodyBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "closeButtonIconWidth": 20,
 "title": "",
 "backgroundColorRatios": [],
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "height": 600,
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "backgroundColor": [],
 "bodyPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "titleFontColor": "#000000",
 "headerBorderSize": 10,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47"
 ],
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "veilOpacity": 0.59,
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "minWidth": 20,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#FF0000",
 "layout": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "data": {
  "name": "Window4518"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.33,
  "class": "PanoramaCameraPosition",
  "pitch": -16.53
 },
 "id": "camera_24BACEFD_15BE_A7CF_4192_3956199DD711"
},
{
 "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
 "partial": false,
 "label": "012",
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
  "this.overlay_195027C2_05E5_F605_4177_4A79943AEFCC"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "easing": "linear",
 "id": "effect_671F5FB9_05AA_B607_4186_4F9D961227F2",
 "class": "SlideInEffect",
 "duration": 0,
 "from": "right"
},
{
 "thumbnailUrl": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_t.jpg",
 "partial": false,
 "label": "001...LEG",
 "id": "panorama_10349A20_055B_9E04_4165_24D1F907E1A8",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0",
  "this.overlay_328826E3_15BB_E7FB_41B2_19EF576B057C",
  "this.overlay_31144424_15A6_9A7D_4187_D753D8552824",
  "this.overlay_127529A8_05AD_BA05_418B_07BD512EB00E",
  "this.overlay_30BC276D_15AE_66CF_41B3_CBE2681A55DD",
  "this.overlay_37694203_15AA_BE3B_41B4_0F3C3118D854",
  "this.overlay_361866A8_15AA_6675_417D_805A5B2E3217"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
 "partial": false,
 "label": "009 copiar",
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1675F608_055B_9605_4148_289A093B3218_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
  "this.overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
  "this.overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
  "this.overlay_1898879C_05E6_F63D_4170_66ECE8880613",
  "this.overlay_19A5772E_05E6_B61C_415F_7028C1939683"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_1BC6AAF6_1566_AFDD_41B0_6E066BB60AC5",
 "closeButtonPaddingLeft": 0,
 "horizontalAlign": "center",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "closeButtonRollOverBackgroundOpacity": 1,
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "class": "Window",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "closeButtonIconWidth": 20,
 "title": "",
 "backgroundColor": [],
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "backgroundColorRatios": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "bodyPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FF0000",
  "#FF0000"
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "veilOpacity": 0.59,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896C"
 ],
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "minWidth": 20,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#B2B2B2",
 "layout": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "data": {
  "name": "Window4518"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "easing": "quad_in",
 "id": "effect_56EFE123_05DD_AA0B_417A_2772B8D8B446",
 "class": "FadeOutEffect",
 "duration": 1100
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.14,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "id": "camera_3B0BAE82_15BE_A635_417A_2CD753C3AF3E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.59,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "id": "camera_3B7FCED0_15BE_A7D5_41A8_9F27737035D8"
},
{
 "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
 "partial": false,
 "label": "002 copiar",
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10349A20_055B_9E04_4165_24D1F907E1A8"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
  "this.overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
  "this.overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
 "partial": false,
 "label": "011 copiar",
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
  "this.overlay_1978731D_05E5_6E3F_4191_617BBE176123",
  "this.overlay_1AF25F56_05E5_960C_417A_214619834776",
  "this.overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
 "partial": false,
 "label": "013",
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
  "this.overlay_19469E19_05E5_9604_418A_081538C24A34"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_3B2B6EA1_15BE_A677_4194_0F659B28589C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 70.71,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "id": "camera_248A6EF3_15BE_A7DB_419F_902AF6BE85C1"
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "closeButtonPaddingBottom": 0,
 "id": "window_3090D72F_15AE_664B_41B4_5D4DCB7E6C88",
 "closeButtonPaddingLeft": 0,
 "horizontalAlign": "center",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "width": 400,
 "closeButtonRollOverBackgroundColor": [],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonPressedIconLineWidth": 3,
 "modal": true,
 "verticalAlign": "middle",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "shadowOpacity": 0.5,
 "headerVerticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "class": "Window",
 "shadowVerticalLength": 0,
 "minHeight": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "closeButtonIconWidth": 20,
 "title": "",
 "backgroundColorRatios": [],
 "borderSize": 0,
 "bodyPaddingLeft": 0,
 "height": 600,
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "bodyPaddingTop": 0,
 "gap": 10,
 "backgroundColor": [],
 "bodyPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingTop": 5,
 "closeButtonPressedBorderColor": "#000000",
 "titleFontColor": "#000000",
 "headerBorderSize": 10,
 "headerPaddingBottom": 5,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "1.29vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderColor": "#000000",
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "shadowSpread": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonIconLineWidth": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1B"
 ],
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 0,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "veilOpacity": 0.59,
 "closeButtonPressedBackgroundColor": [],
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "minWidth": 20,
 "titleFontFamily": "Arial",
 "footerBorderSize": 0,
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#FF0000",
 "layout": "vertical",
 "closeButtonPressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "bodyPaddingRight": 0,
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "data": {
  "name": "Window4518"
 },
 "closeButtonBackgroundColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_camera"
},
{
 "items": [
  {
   "media": "this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0",
   "start": "this.viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_078E5F02_1566_6635_417C_8131DD4B55C4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_078E5F02_1566_6635_417C_8131DD4B55C4, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896CVideoPlayer)",
   "player": "this.viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896CVideoPlayer"
  }
 ],
 "id": "playList_078E5F02_1566_6635_417C_8131DD4B55C4",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0",
   "start": "this.viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0FF073F6_156E_9DDD_41A2_D27F7DB5B286, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0FF073F6_156E_9DDD_41A2_D27F7DB5B286, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47VideoPlayer)",
   "player": "this.viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47VideoPlayer"
  }
 ],
 "id": "playList_0FF073F6_156E_9DDD_41A2_D27F7DB5B286",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.55,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "id": "camera_24E1CF30_15BE_A655_4189_1DAE41DFD2DE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_camera"
},
{
 "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
 "partial": false,
 "label": "010",
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1675F608_055B_9605_4148_289A093B3218"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
  "this.overlay_195247AD_05E6_961C_4183_457CC7FFC62C"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_camera"
},
{
 "data": {
  "label": "y2mate.com - Chuck Berry  Johnny B Goode Remastered"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "id": "audio_1F839F78_0D60_93DF_419A_DEE055F7FF09",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_1F839F78_0D60_93DF_419A_DEE055F7FF09.mp3",
  "oggUrl": "media/audio_1F839F78_0D60_93DF_419A_DEE055F7FF09.ogg"
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.96,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_3B54DEB1_15BE_A657_41B3_69F7405FBEDA"
},
{
 "thumbnailUrl": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_t.jpg",
 "partial": false,
 "label": "005 copiar",
 "id": "panorama_16571ED8_055B_9605_416D_5BA6515F53AE",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
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
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
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
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE_tcap0",
  "this.overlay_18CEAB0F_05DB_9E1C_417E_9B47A3649488",
  "this.overlay_1E630404_05DB_AA0C_4182_6E85A21A59BC",
  "this.overlay_1B808695_0E6C_8D40_41A9_C4E0935605E6"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 5,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "top": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "horizontalAlign": "left",
 "data": {
  "name": "COLUNAL CENTRAL"
 },
 "children": [
  "this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
  "this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB"
 ],
 "id": "Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC",
 "left": "0%",
 "width": 327.9,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "horizontalAlign": "center",
 "id": "Image_74B2519C_057D_EFA1_4189_30B4540E35EA",
 "left": "0%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "url": "skin/Image_74B2519C_057D_EFA1_4189_30B4540E35EA.png",
 "class": "Image",
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "FUNDO PRETO"
 },
 "paddingTop": 0,
 "scaleMode": "fill"
},
{
 "horizontalAlign": "center",
 "id": "Image_4B796E6E_054E_F561_4174_FDFB6E8DF664",
 "left": "22%",
 "maxWidth": 1000,
 "right": "8.7%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "maxHeight": 801,
 "url": "skin/Image_4B796E6E_054E_F561_4174_FDFB6E8DF664.png",
 "class": "Image",
 "propagateClick": false,
 "minHeight": 600,
 "bottom": "10.22%",
 "top": "5%",
 "shadow": false,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_74B2519C_057D_EFA1_4189_30B4540E35EA, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Image_4B796E6E_054E_F561_4174_FDFB6E8DF664, false, 0, this.effect_56EFE123_05DD_AA0B_417A_2772B8D8B446, 'hideEffect', false); this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_671F5FB9_05AA_B607_4186_4F9D961227F2, 'showEffect', false)",
 "minWidth": 600,
 "paddingRight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "TEXTO INICIAL"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "pressedIconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "MUTE"
 },
 "iconURL": "skin/IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017.png",
 "id": "IconButton_3892E85F_04DA_1CA0_418E_B4B8ACE1A017",
 "right": "9.23%",
 "width": 80,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "top": "3.28%",
 "minHeight": 0,
 "propagateClick": false,
 "shadow": false,
 "mode": "toggle",
 "height": 74,
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_1675D659_055B_F607_4181_84BFD3027F08_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 4.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.75,
   "hfov": 29.35
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30AB1979_05FE_9A04_417D_7423258ED8BC",
   "pitch": -24.75,
   "yaw": 4.89,
   "hfov": 29.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FEAA372_05E5_6E04_413E_CA98F02712FC",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -58.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.89,
   "hfov": 19.05
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A4D979_05FE_9A04_4147_07D5E4D2F1C9",
   "pitch": -11.89,
   "yaw": -58.9,
   "hfov": 19.05,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F7309AD_05E5_BA1F_4189_B9BEDEE08C95",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_3B69FEE0_15BE_A7F5_41A7_9E03BD443606); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 49.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.6,
   "hfov": 23.78
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A4A979_05FE_9A04_4184_AD5391B98E3F",
   "pitch": -20.6,
   "yaw": 49.49,
   "hfov": 23.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18D5C532_05E5_EA05_4165_DEB865F33A7E",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_3B7FCED0_15BE_A7D5_41A8_9F27737035D8); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.79,
   "hfov": 30.22
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A46979_05FE_9A04_4184_C02ABE9C88C5",
   "pitch": -20.79,
   "yaw": -179.86,
   "hfov": 30.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1AE13A7A_05E5_9E04_418E_B4CCA67CC986",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E, this.camera_24987EE8_15BE_A7F5_41A8_075C8EDE71D7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 5.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.18,
   "hfov": 24.99
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30ABD978_05FE_9A04_4187_AC9573B8D570",
   "pitch": -22.18,
   "yaw": 5.58,
   "hfov": 24.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FBAB121_05DA_AA07_413C_9A550DA55222",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 179.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.55,
   "hfov": 28.85
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30ABE978_05FE_9A04_418D_3E594908CEBE",
   "pitch": -15.55,
   "yaw": 179.35,
   "hfov": 28.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18AE29D6_05DA_9A0D_415F_BF04796ED208",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_16571ED8_055B_9605_416D_5BA6515F53AE, this.camera_3B3D9EA1_15BE_A677_418C_C5D844A45FEB); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -135.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.41,
   "hfov": 27.31
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A6497A_05FE_9A04_4191_152B4518AEEB",
   "pitch": -19.41,
   "yaw": -135.26,
   "hfov": 27.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19572DCF_05E7_9A1B_4147_599B497BAD9F",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_3B2B6EA1_15BE_A677_4194_0F659B28589C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.39,
   "hfov": 22.18
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A6097A_05FE_9A04_4175_17E09D4FB90A",
   "pitch": -21.39,
   "yaw": 179.84,
   "hfov": 22.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1A4695B8_05E7_6A04_417F_64AE43076179",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_3B54DEB1_15BE_A657_41B3_69F7405FBEDA); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_167546D9_055B_9607_417E_841620224C88_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 78.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.71,
   "hfov": 23.17
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0781AF01_1566_6637_4179_4C6940EA9C80",
   "pitch": -19.71,
   "yaw": 78.17,
   "hfov": 23.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F87F13A_05DB_AA05_416B_7A8A922697F8",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.51,
   "hfov": 23.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4607AD16_05EE_FA0C_417A_C8D50C90B8E6",
   "pitch": -19.51,
   "yaw": -179.37,
   "hfov": 23.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E5FBE9A_05EA_9605_4182_5223E3BA620F",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5, this.camera_24D76F11_15BE_A657_4146_648BDF8A93BF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.58,
   "hfov": 30.06
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A99977_05FE_9A0C_415B_30242324A404",
   "pitch": -21.58,
   "yaw": -2.83,
   "hfov": 30.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_123BC95B_05AD_9A3B_4173_B091541934A7",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "pitch": -24.75,
   "hfov": 29.35
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E9924C9_05AA_EA07_4144_6395B4AA6E73",
   "pitch": -24.75,
   "yaw": -171.16,
   "hfov": 29.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_132E8F63_05AD_960B_4182_A0BB34998BEF",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_3B0BAE82_15BE_A635_417A_2CD753C3AF3E); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "progressBorderSize": 0,
 "id": "viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54A",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea20119"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1B",
 "class": "VideoPlayer",
 "id": "viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1BVideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54A",
 "class": "VideoPlayer",
 "id": "viewer_uid3BE06E6C_15BE_A6CD_41A2_B41735D8F54AVideoPlayer"
},
{
 "progressBorderSize": 0,
 "id": "viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9D",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea20120"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9D",
 "class": "VideoPlayer",
 "id": "viewer_uid3BE12E6C_15BE_A6CD_41A0_3A22BBBBEC9DVideoPlayer"
},
{
 "progressBorderSize": 0,
 "id": "viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea20117"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 164.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.03,
   "hfov": 26.47
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A0097B_05FE_9A04_4172_0EB658B182F7",
   "pitch": -35.03,
   "yaw": 164.31,
   "hfov": 26.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_195027C2_05E5_F605_4177_4A79943AEFCC",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_24E1CF30_15BE_A655_4189_1DAE41DFD2DE); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Imagem"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -47.91,
   "hfov": 8.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_2_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 208
     }
    ]
   },
   "pitch": 34.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_328826E3_15BB_E7FB_41B2_19EF576B057C",
 "maps": [
  {
   "yaw": -47.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 34.76,
   "hfov": 8.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -48.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 34.76,
   "hfov": 33.89
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3BE21E6C_15BE_A6CD_4181_278A789648A6",
   "pitch": 34.76,
   "yaw": -48.22,
   "hfov": 33.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31144424_15A6_9A7D_4187_D753D8552824",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupMedia(this.window_0214FCC1_156E_6A37_41B0_5957189976D4, this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0, this.playList_0FF073F6_156E_9DDD_41A2_D27F7DB5B286, '90%', '90%', true, true); if(this.AnimatedImageResource_3BE21E6C_15BE_A6CD_4181_278A789648A6.get('state') != 'playing'){ this.AnimatedImageResource_3BE21E6C_15BE_A6CD_4181_278A789648A6.play(); } else { this.AnimatedImageResource_3BE21E6C_15BE_A6CD_4181_278A789648A6.pause(); }"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -19.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18,
   "hfov": 23.22
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1C6F13DC_0C95_528E_41A1_0ACFFE6CFDAE",
   "pitch": -18,
   "yaw": -19.64,
   "hfov": 23.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_127529A8_05AD_BA05_418B_07BD512EB00E",
 "data": {
  "label": "Arrow 05b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_16699750_055B_B604_416A_6E9B250AC4B0, this.camera_3B306E92_15BE_A655_41B2_8CB4E46338BA); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 46.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 38.32,
   "hfov": 32.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3BE32E6C_15BE_A6CD_4193_65FB1D239D41",
   "pitch": 38.32,
   "yaw": 46.33,
   "hfov": 32.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30BC276D_15AE_66CF_41B3_CBE2681A55DD",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupMedia(this.window_3090D72F_15AE_664B_41B4_5D4DCB7E6C88, this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0, this.playList_3BE36E6C_15BE_A6CD_41A1_58E60D147017, '90%', '90%', true, true); if(this.AnimatedImageResource_3BE32E6C_15BE_A6CD_4193_65FB1D239D41.get('state') != 'playing'){ this.AnimatedImageResource_3BE32E6C_15BE_A6CD_4193_65FB1D239D41.play(); } else { this.AnimatedImageResource_3BE32E6C_15BE_A6CD_4193_65FB1D239D41.pause(); }"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -15.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 40.49,
   "hfov": 31.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3BE0EE6C_15BE_A6CD_41A7_3157E4B5EC1D",
   "pitch": 40.49,
   "yaw": -15.38,
   "hfov": 31.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_37694203_15AA_BE3B_41B4_0F3C3118D854",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupMedia(this.window_375560DD_15A9_BBCF_41B4_0F99E2B1B7A6, this.video_353B3DB7_156A_AA5B_41A7_8E09A829B66F, this.playList_3BE02E6C_15BE_A6CD_41AB_D572DEFC261F, '90%', '90%', false, true); if(this.AnimatedImageResource_3BE0EE6C_15BE_A6CD_41A7_3157E4B5EC1D.get('state') != 'playing'){ this.AnimatedImageResource_3BE0EE6C_15BE_A6CD_41A7_3157E4B5EC1D.play(); } else { this.AnimatedImageResource_3BE0EE6C_15BE_A6CD_41A7_3157E4B5EC1D.pause(); }"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 10.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 39.7,
   "hfov": 31.74
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3BE1DE6C_15BE_A6CD_41AD_DF72B4317CE6",
   "pitch": 39.7,
   "yaw": 10.73,
   "hfov": 31.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_361866A8_15AA_6675_417D_805A5B2E3217",
 "data": {
  "label": "DEFUMA\u00c7\u00c3O"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupMedia(this.window_37D6219A_15A6_BA55_4192_701B72F825D7, this.video_369F61AB_159F_9A4B_41A2_9E4E787204BE, this.playList_3BE1EE6C_15BE_A6CD_4183_D8E30BCF4E91, '90%', '90%', true, true); if(this.AnimatedImageResource_3BE1DE6C_15BE_A6CD_41AD_DF72B4317CE6.get('state') != 'playing'){ this.AnimatedImageResource_3BE1DE6C_15BE_A6CD_41AD_DF72B4317CE6.play(); } else { this.AnimatedImageResource_3BE1DE6C_15BE_A6CD_41AD_DF72B4317CE6.pause(); }"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_1675F608_055B_9605_4148_289A093B3218_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.95,
   "hfov": 24.8
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AE5E59D_05E6_EA3E_4171_09C60283E066",
   "pitch": -15.95,
   "yaw": 6.57,
   "hfov": 24.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FCF584A_05E6_BA04_418F_F691A02C383B",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 93.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68,
   "hfov": 21.95
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AE5459E_05E6_EA3D_418C_FE6702F0D398",
   "pitch": -21.68,
   "yaw": 93.5,
   "hfov": 21.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1F76C5B5_05E6_AA0F_418B_90CC5C1C83A8",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909, this.camera_24C70F1B_15BE_A64B_41B4_062D7828C05C); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -84.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.38,
   "hfov": 18.36
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AE5159E_05E6_EA3D_4170_597E6DF379A6",
   "pitch": -13.38,
   "yaw": -84.52,
   "hfov": 18.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1898879C_05E6_F63D_4170_66ECE8880613",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -176.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.36,
   "hfov": 18.86
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3AE4F59E_05E6_EA3D_4190_6A6B9FCD2C40",
   "pitch": -14.36,
   "yaw": -176.99,
   "hfov": 18.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19A5772E_05E6_B61C_415F_7028C1939683",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675D659_055B_F607_4181_84BFD3027F08, this.camera_24F17F25_15BE_A67E_41B1_6CBECE4C9EC3); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "progressBorderSize": 0,
 "id": "viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896C",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea20121"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_16699750_055B_B604_416A_6E9B250AC4B0_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -70.08,
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
   "pitch": -26.33,
   "hfov": 28.97
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E99C4C8_05AA_EA05_4188_854EFE0735E2",
   "pitch": -26.33,
   "yaw": -70.08,
   "hfov": 28.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_127EFC80_05AF_9A05_4181_4DA15888B4D0",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 166.89,
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
   "pitch": -32.27,
   "hfov": 27.33
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1E9984C9_05AA_EA07_4170_0C88C6BD6C9B",
   "pitch": -32.27,
   "yaw": 166.89,
   "hfov": 27.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_125CDB9C_05AE_9E3C_418C_1396B0313A29",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -94.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38,
   "hfov": 25.47
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A7197B_05FE_9A04_4163_186D0997678F",
   "pitch": -38,
   "yaw": -94.41,
   "hfov": 25.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1978731D_05E5_6E3F_4191_617BBE176123",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C, this.camera_24BACEFD_15BE_A7CF_4192_3956199DD711); this.mainPlayList.set('selectedIndex', 11)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 65.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.44,
   "hfov": 26.66
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A0F97B_05FE_9A04_416F_DCA92F70BE79",
   "pitch": -34.44,
   "yaw": 65.22,
   "hfov": 26.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1AF25F56_05E5_960C_417A_214619834776",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5, this.camera_24A4CF07_15BE_A63B_419D_1101EAA3F2E4); this.mainPlayList.set('selectedIndex', 12)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 169.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.57,
   "hfov": 22.38
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A0597B_05FE_9A04_4162_062AB64737D5",
   "pitch": -13.57,
   "yaw": 169.36,
   "hfov": 22.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2C4C38AE_05EA_BA1D_4179_9A5053E1B6F2",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_248A6EF3_15BE_A7DB_419F_902AF6BE85C1); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -123.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.28,
   "hfov": 27.62
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A1897B_05FE_9A04_4182_08426021B104",
   "pitch": -31.28,
   "yaw": -123.29,
   "hfov": 27.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_19469E19_05E5_9604_418A_081538C24A34",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9, this.camera_3B4F6EC0_15BE_A636_41AE_650835C7121D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "progressBorderSize": 0,
 "id": "viewer_uid3BE0AE6C_15BE_A6CD_416A_94DCC7412C1B",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 100,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea20118"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896C",
 "class": "VideoPlayer",
 "id": "viewer_uid3BE40E6C_15BE_A6CD_41AF_8CCF3549896CVideoPlayer"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47",
 "class": "VideoPlayer",
 "id": "viewer_uid3BE38E6C_15BE_A6CD_41A2_9A26F4780A47VideoPlayer"
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.5,
   "hfov": 28.13
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A7897A_05FE_9A04_4188_7541D6225608",
   "pitch": -29.5,
   "yaw": -179.86,
   "hfov": 28.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_195247AD_05E6_961C_4183_457CC7FFC62C",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1675F608_055B_9605_4148_289A093B3218, this.camera_3B43AEC0_15BE_A636_419A_0E586EE348C0); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "rotate": false,
 "distance": 50,
 "id": "panorama_16571ED8_055B_9605_416D_5BA6515F53AE_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 172.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.83,
   "hfov": 30.77
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30AA9977_05FE_9A0C_417B_B108E3870ADC",
   "pitch": -17.83,
   "yaw": 172.42,
   "hfov": 30.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_18CEAB0F_05DB_9E1C_417E_9B47A3649488",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_167546D9_055B_9607_417E_841620224C88, this.camera_24135F3A_15BE_A655_41A0_CCBADC6F1310); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 84.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.03,
   "hfov": 30.9
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_148FB756_0E6C_8BC0_418C_97731B2F1E85",
   "pitch": -17.03,
   "yaw": 84.21,
   "hfov": 30.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1E630404_05DB_AA0C_4182_6E85A21A59BC",
 "data": {
  "label": "Circle 03b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -80.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.64,
   "hfov": 24.04
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8",
   "pitch": 0.64,
   "yaw": -80.75,
   "hfov": 24.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1B808695_0E6C_8D40_41A9_C4E0935605E6",
 "data": {
  "label": "Info Red 02"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "rollOut": "this.AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8.stop()",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupMedia(this.window_1BC6AAF6_1566_AFDD_41B0_6E066BB60AC5, this.video_1B65154F_0E6D_8FC0_41A6_ADAE408791E0, this.playList_078E5F02_1566_6635_417C_8131DD4B55C4, '90%', '90%', true, true); if(this.AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8.get('state') != 'playing'){ this.AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8.play(); } else { this.AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8.pause(); }"
  }
 ]
},
{
 "horizontalAlign": "left",
 "data": {
  "name": "COLUNINHA"
 },
 "children": [
  "this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
  "this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726"
 ],
 "id": "Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D",
 "left": "0%",
 "width": 90,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": true,
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "horizontalAlign": "left",
 "data": {
  "name": "EXPAN\u00c7\u00c3O"
 },
 "children": [
  "this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
  "this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA"
 ],
 "id": "Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB",
 "right": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "height": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30AB1979_05FE_9A04_417D_7423258ED8BC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A4D979_05FE_9A04_4147_07D5E4D2F1C9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A4A979_05FE_9A04_4184_AD5391B98E3F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A46979_05FE_9A04_4184_C02ABE9C88C5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675D659_055B_F607_4181_84BFD3027F08_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30ABD978_05FE_9A04_4187_AC9573B8D570",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30ABE978_05FE_9A04_418D_3E594908CEBE",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E08B9A8A_F1C2_5F04_41D8_B86AA16C312E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A6497A_05FE_9A04_4191_152B4518AEEB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A6097A_05FE_9A04_4175_17E09D4FB90A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E08FBAFA_F1C2_3F05_41E5_6D3943EFD909_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0781AF01_1566_6637_4179_4C6940EA9C80",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4607AD16_05EE_FA0C_417A_C8D50C90B8E6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_167546D9_055B_9607_417E_841620224C88_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A99977_05FE_9A0C_415B_30242324A404",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1E9924C9_05AA_EA07_4144_6395B4AA6E73",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_165D0EBB_055B_B67B_4187_2ED2E41B1ED5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A0097B_05FE_9A04_4172_0EB658B182F7",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E0B25ACE_F1C5_FF1D_41E6_2983C4DD870C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3BE21E6C_15BE_A6CD_4181_278A789648A6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_3_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 33
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1C6F13DC_0C95_528E_41A1_0ACFFE6CFDAE",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3BE32E6C_15BE_A6CD_4193_65FB1D239D41",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_4_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 33
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3BE0EE6C_15BE_A6CD_41A7_3157E4B5EC1D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_5_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 33
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3BE1DE6C_15BE_A6CD_41AD_DF72B4317CE6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_10349A20_055B_9E04_4165_24D1F907E1A8_0_HS_6_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6,
 "frameDuration": 33
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AE5E59D_05E6_EA3E_4171_09C60283E066",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AE5459E_05E6_EA3D_418C_FE6702F0D398",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AE5159E_05E6_EA3D_4170_597E6DF379A6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AE4F59E_05E6_EA3D_4190_6A6B9FCD2C40",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675F608_055B_9605_4148_289A093B3218_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1E99C4C8_05AA_EA05_4188_854EFE0735E2",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_1E9984C9_05AA_EA07_4170_0C88C6BD6C9B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_16699750_055B_B604_416A_6E9B250AC4B0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A7197B_05FE_9A04_4163_186D0997678F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A0F97B_05FE_9A04_416F_DCA92F70BE79",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A0597B_05FE_9A04_4162_062AB64737D5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1675C51D_055B_AA3C_4191_A3D91E700AD9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A1897B_05FE_9A04_4182_08426021B104",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E0B7C27A_F1C5_CF04_41D5_FFE3ED8A64E5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30A7897A_05FE_9A04_4188_7541D6225608",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_E08F5B70_F1C5_DD05_41D5_F703C37D0EF4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_30AA9977_05FE_9A0C_417B_B108E3870ADC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_148FB756_0E6C_8BC0_418C_97731B2F1E85",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_0780BF01_1566_6637_419E_5B4D593A40C8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_16571ED8_055B_9605_416D_5BA6515F53AE_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "finalFrame": "first",
 "repeat": 1,
 "rowCount": 6,
 "frameDuration": 33
},
{
 "horizontalAlign": "left",
 "id": "Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703",
 "left": "0%",
 "width": 36,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "verticalAlign": "top",
 "class": "Container",
 "top": "0%",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "height": "100%"
},
{
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726.png",
 "id": "IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726",
 "left": 10,
 "maxWidth": 70,
 "width": 70,
 "rollOverIconURL": "skin/IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "minHeight": 1,
 "bottom": "40%",
 "top": "40%",
 "shadow": false,
 "maxHeight": 80,
 "mode": "push",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1EF5A0C1_04FE_EDA3_4167_E5B524BB7BBC, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFF0B1_04FE_EDE3_4188_5D1AFEE63703, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, true, 0, this.effect_6AAC9764_05BF_960D_4167_B79BED30937C, 'showEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "minWidth": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "BOT\u00c3O ABRIR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6"
 ],
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "90%",
 "class": "Container",
 "top": "0%",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingRight": 0,
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "height": "100%"
},
{
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA.png",
 "id": "IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA",
 "maxWidth": 70,
 "right": 9,
 "width": 70,
 "rollOverIconURL": "skin/IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": true,
 "minHeight": 1,
 "bottom": "40%",
 "top": "40%",
 "shadow": false,
 "maxHeight": 50,
 "mode": "push",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1EEF60B1_04FE_EDE3_418C_303D3333CEDB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEF70B1_04FE_EDE3_4190_7E44E16C5435, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.IconButton_1EF590C1_04FE_EDA3_4191_67D6C53FC0DA, false, 0, this.effect_706911C3_05BA_EA04_4193_07910AFBC595, 'hideEffect', false); this.setComponentVisibility(this.Container_1EEFD0B1_04FE_EDE3_4166_7B9E69855C3D, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1EEF40B1_04FE_EDE3_4187_28FF64CC7726, true, 0, null, null, false)",
 "minWidth": 70,
 "paddingRight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "BOTAO FECHAR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "id": "Container_1EE880B1_04FE_EDE3_416D_EEB9C6CF95F6",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "children": [
  "this.Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
  "this.ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
  "this.ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
  "this.ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
  "this.ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9"
 ],
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 40,
 "verticalAlign": "top",
 "width": "100%",
 "class": "Container",
 "top": "0%",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "paddingRight": 40,
 "paddingLeft": 40,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 40,
 "contentOpaque": false,
 "height": "100%"
},
{
 "horizontalAlign": "center",
 "id": "Image_24C775DA_04F6_37A1_4180_D80ED41939F9",
 "left": "7.74%",
 "maxWidth": 400,
 "right": "0.09%",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "url": "skin/Image_24C775DA_04F6_37A1_4180_D80ED41939F9.png",
 "class": "Image",
 "propagateClick": false,
 "minHeight": 1,
 "bottom": "0%",
 "top": "0%",
 "shadow": false,
 "maxHeight": 2268,
 "borderSize": 0,
 "minWidth": 200,
 "paddingRight": 0,
 "paddingLeft": 0,
 "data": {
  "name": "REDES VERTICAL"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_1E74E895_0ED1_07A6_41A9_2B4FA5A0F0AB",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 1,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "top": "50.69%",
 "toolTipTextShadowOpacity": 0,
 "bottom": "33.47%",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 1,
 "click": "this.openLink('https://www.facebook.com/lojaderoupas97/', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_1F48FC36_0EDF_1EE5_419F_4E760E6B5510",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": "0.46%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 1,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "top": "73.5%",
 "toolTipTextShadowOpacity": 0,
 "bottom": "0%",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 1,
 "click": "this.openLink('https://www.instagram.com/explosive_shop__/', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_1E6E72BD_0ED3_0BE7_417A_0486FAB094BA",
 "left": "0.41%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": "0.46%",
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 1,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "top": "28.19%",
 "toolTipTextShadowOpacity": 0,
 "bottom": "53.66%",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 1,
 "click": "this.openLink('https://youtu.be/gy_qrJ01djw', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_1FEFFE83_0ED1_1BA3_4172_F2933C6E7EA9",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "right": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 6,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 1,
 "playbackBarBottom": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "paddingRight": 0,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "top": "0%",
 "toolTipTextShadowOpacity": 0,
 "bottom": "75.29%",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "minWidth": 1,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=5553981433810', '_blank')",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer 2"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
}],
 "class": "Player",
 "propagateClick": false,
 "minHeight": 20,
 "shadow": false,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "gap": 10,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player1098"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "height": "100%"
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
