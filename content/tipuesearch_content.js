var tipuesearch = {"pages": [{'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week 2-5', 'text': 'week2：建立個人網站 \n \n 新增新的倉儲，命名為「cad2019」，並設公開 下載 2019Fall可攜套件.7z (編譯 Solvespace 用) 進入tmp 到 "home_mdecourse"，用Sc1開啟 .gitconfig 利用submodule獲得子模組 開設近端伺服器修改網頁內容 將修改內容push上去 \n week3：編譯solvespace \n \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe git version 查驗 git 版本 git 2.13 版本以上, 可以使用下列 git clone --recurse-submodules 取得所有子模組資料 git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() 需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: cd solvespace cd extlib cd libpng mkdir build cd build cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make week5：繪製 Solvespace Tutorial 11: Cubic Bezier Spline tool (Vase) \n \n 開啟自己隨身的Solvespace程式。 使用三點曲線繪製外型 使用直線繪製底座即使圖形成為封閉面 選擇一條線作為旋轉軸，使圖形繞著軸旋轉 \n', 'tags': '', 'url': 'Week 2-5.html'}, {'title': 'Week 6-9', 'text': 'Week6 \n 任務1：利用 Solvespace 繪製雙輪車所需的零組件, 將操作過程拍成帶有說明字幕的影片後上傳至 Youtube 後, 嵌入個人網頁 W6 頁面中. (影片標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一參數化零組件繪製). \n \n 任務2：利用 V-rep 3.6.1 rev4 與隨身程式執行系統, 完成網際 V-rep 模型控制任務後, 將操作過程拍成帶有說明字幕的影片後上傳至 Youtube 後, 嵌入個人網頁 W6 頁面中. (影片標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一網際 V-rep 模型控制). \n \n 任務3：從\xa0 #14 \xa0 已知可透過 Python 程式啟動或停止 V-rep 模擬, 請在事項 2 的架構下, 新增兩個按鈕, 可以啟動或停止所連線的 V-rep 模擬. 完成後將操作流程拍成帶字幕的影片後上傳至 Youtube 後, 嵌入個人網頁 W6 頁面中. (影片標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一新增啟動與停止按鈕) \n \n Week7 \n 任務1：Solvespace 編譯加入學號 \n \n \xa0 到tmp > solvespace > build >src >CMakeFiles > solvespace.dir刪掉\xa0 \xa0 \xa0 \xa0 \xa0 \xa0slovespace.cpp.obj檔 \n 到 \xa0solvespace\xa0>src找到\xa0\xa0slovespace.cpp 拉進編輯器 \n 利用ctrl + f 進行搜尋 ，找GPL \n 找到\xa0\xa0this\xa0 is\xa0\xa0 solvespace 在後面加上 is compiled by 自己學號 \n 利用小黑框，路徑移置\xa0tmp > solvespace > build 打上\xa0mingw32-makemingw32-make 指令 \n 完成後到\xa0solvespace > build >bin 開啟\xa0slovespace.exe ，進help 點 about 確認驗證完成 \n \n \n 任務2： Solvespace\xa0參數繪圖驗證 \n \n Week8 \n 啟用 CMSiMDE中的網誌系統 \n \n 開啟Leo，並用Leo開啟config 內的 pelican.Leo \n 複製個人Blog網址到@path../\xa0➜ Pelican設定\xa0➜遠端 sitevrl \n 將DISQUS_SITENAME改為 學號 CAD2019 \n 右鍵 local_blog 點選 goto\xa0 script ，將指令複製到 cmd\xa0 \n 去靜端檢查 \n \n \n \n \n 導入 Webots \n \n 下載 Webot 2019a.7z \n 複製start_mdecourse.bat並更名start_mdecourse -webot.bat \n 將指令貼上 \n 按stop,開啟 start_mdecourse -webot.bat \n', 'tags': '', 'url': 'Week 6-9.html'}, {'title': 'Week 10-14', 'text': '\n', 'tags': '', 'url': 'Week 10-14.html'}, {'title': 'Week 15-18', 'text': '', 'tags': '', 'url': 'Week 15-18.html'}, {'title': 'Note', 'text': 'git submodule add \xa0 https://github.com/mdecourse/cmsimde.git cmsimde 第一次把cmsimde載入倉儲使用 python -m pip install flask_cors \xa0 要更新下載flask_cors git clone --recurse-submodules \xa0 https://github.com/solvespace/solvespace.git solvespace 從遠端copy cmsimde必須，綠字部分改cmsimde的網址 \n 使用學校網路需用proxy \n [http] proxy = [2001:288:6004:17::7]:3128 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'video production', 'text': '我們使用"Sharex" (圖一)進行網頁拍攝,並使用"aegisub"(圖二)或arctime (圖二-1) 做字幕編輯,最後再由" avidemux"(圖三)進行影片檔跟字幕檔的合併. \n \n Sharex (圖一) \n aegisub (圖二) \n \n arctime (圖二-1) \n \n avidemux (圖三) \n', 'tags': '', 'url': 'video production.html'}, {'title': 'solvespace - 快捷鍵', 'text': 'Sketch: \n \n Constrain: \n \n New group: \n \n Perspective: \n \n', 'tags': '', 'url': 'solvespace - 快捷鍵.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};