var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "714",
                    "DialogWidth": "728"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/hawkeye/Pictures/arr.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "420",
                    "DialogWidth": "560"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/hawkeye/Pictures/arr.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
