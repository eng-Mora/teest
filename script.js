// منع دخول مباشر لـ index.html / root من غير تسجيل دخول
const path = window.location.pathname;
const isHome = path === "/teest/" || path.endsWith("/teest/index.html");
if (isHome && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}


document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('loginContainer');
    const mainContent = document.getElementById('main');
    const videoContainer = document.getElementById('videos');
    let currentUsername = '';

    function showLogin() {
        if (loginContainer) loginContainer.style.display = 'flex';
        if (mainContent) mainContent.style.display = 'none';
    }

    function showMainContent() {
        if (loginContainer) loginContainer.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
    }

    function loadVideoContent(code, username) {
        let videoHTML = '';
        let welcomeBanner = '';

        // رسالة الترحيب الخاصة للكود 45454
        if (username === '45454') {
            welcomeBanner = `
            <div class="welcome-banner">
                <div class="welcome-text">
                    <h3>مرحباً عمرو محمد</h3>
                    <p> ☝🏽شد حيلك يا باشا… دي آخر محطة قبل الحلم الكبير </p>
                </div>
                <div class="profile-img-container">
                    <img src="https://i.imgur.com/JqYeS5n.jpg" alt="صورة البروفايل">
                    <div class="profile-info" id="profileInfo">
                        <p><strong>الاسم:</strong> عمرو محمد عبدالمنعم</p>
                        <p><strong>رقم التليفون:</strong> 01125266011</p>
                        <p><strong>البريد الإلكتروني:</strong> mamro8529@gmail.com</p>
                        <p><strong>لغة الدراسة:</strong> عربي</p>
                    </div>
                </div>
            </div>
            `;
        }

        if (code === 'CODE1') {
            videoHTML = welcomeBanner + `
                <h2>الفصل الثاني</h2>
                <select id="videoSelector" class="form-select">
                    <option value="video0">اختر الفيديو...</option>
                    <option value="video1">شرح الفصل الثاني (الجزء الأول)</option>
                    <option value="video2">شرح الفصل الثاني (الجزء الثاني)</option>
                    <option value="video3">شرح الفصل الثاني (الجزء الثالث)</option>
                    <option value="video4">تدريبات الدرس الأول</option>
                    <option value="video5">تدريبات الدرس الثاني</option>
                    <option value="video6">تدريبات الدرس الثالث</option>
                    <option value="video7">تدريبات الدرس الرابع</option>
                </select>
                
                <div class="video" id="video1">
                    <h3 class="video-title">شرح الفصل الثاني (الجزء الأول)</h3>
                    <iframe src="https://drive.google.com/file/d/1JsbhZ8UWhqh9p2RlecTBrCa5L_8vgJCR/preview" allowfullscreen></iframe>
                </div>

                <div class="video" id="video2">
                    <h3 class="video-title">شرح الفصل الثاني (الجزء الثاني)</h3>
                    <iframe src="https://drive.google.com/file/d/1fOeP-_8VgSYQkiR5BeMhL0Xt422Wv7Vc/preview" allowfullscreen></iframe>
                </div>
                
                <div class="video" id="video3">
                    <h3 class="video-title">شرح الفصل الثاني (الجزء الثالث)</h3>
                    <iframe src="https://drive.google.com/file/d/17dQEtszqYpmPmpU3GKYfsiyjGmwCHKhq/preview" allowfullscreen></iframe>
                </div>
             
                <div class="video" id="video4">
                    <h3 class="video-title">تدريبات الدرس الأول</h3>
                    <h4 class="video-part">الجزء الأول</h4>
                    <iframe src="https://drive.google.com/file/d/1Xafno2FXrklMu3N5udbsb_FAPQwQI0Na/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثاني</h4>
                    <iframe src="https://drive.google.com/file/d/1Uqmcfk2Ujoq2X_u8-6K3MTIA7B9NQ-RY/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثالث</h4>
                    <iframe src="https://drive.google.com/file/d/1b4NmhBy8VpzKk4wl0ktq9CvVDU5RVhgJ/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الرابع</h4>
                    <iframe src="https://drive.google.com/file/d/1oYsLZZQhUABeYI9aH2Ac1_eewUfYOC1D/preview" allowfullscreen></iframe>
                </div>
                
                <div class="video" id="video5">
                    <h3 class="video-title">تدريبات الدرس الثاني</h3>
                    <h4 class="video-part">الجزء الأول</h4>
                    <iframe src="https://drive.google.com/file/d/1n8VJZWh6MZLM5EJZoydah6GQzsvpx_pN/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثاني</h4>
                    <iframe src="https://drive.google.com/file/d/1XcTlpD_pOpFchYzye_OzLf54RoxlfVWl/preview" allowfullscreen></iframe>
                </div>
                
                <div class="video" id="video6">
                    <h3 class="video-title">تدريبات الدرس الثالث</h3>
                    <h4 class="video-part">الجزء الأول</h4>
                    <iframe src="https://drive.google.com/file/d/1FSiqPd1aI2N6ObTw1IqskrkkT5A3wDeV/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثاني</h4>
                    <iframe src="https://drive.google.com/file/d/18uhR-4gz7w9Npu9Ronztyu-IMukHurld/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثالث</h4>
                    <iframe src="https://drive.google.com/file/d/1B0R8m9BavCxYEtXOz1qMHiQMEHqCebAA/preview" allowfullscreen></iframe>
                </div>
                
                <div class="video" id="video7">
                    <h3 class="video-title">تدريبات الدرس الرابع</h3>
                    <h4 class="video-part">الجزء الأول</h4>
                    <iframe src="https://drive.google.com/file/d/11MiD_5E587CPRDIRi4j6nMth61_8YbiW/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثاني</h4>
                    <iframe src="https://drive.google.com/file/d/1hSEX0DJvQTrggrkmtIm0NxyoEFvd_RN4/preview" allowfullscreen></iframe>
                    
                    <h4 class="video-part">الجزء الثالث</h4>
                    <iframe src="https://drive.google.com/file/d/17czArTr3Mms54nFtW00TIeA8PHAS-vpc/preview" allowfullscreen></iframe>
                </div>
            `;
        }

        if (videoContainer) {
            videoContainer.innerHTML = videoHTML;

            // إضافة حدث النقر على صورة البروفايل
            const profileImg = document.querySelector('.profile-img-container');
            if (profileImg) {
                profileImg.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const profileInfo = document.getElementById('profileInfo');
                    if (profileInfo) profileInfo.classList.toggle('active');
                });
            }

            // إغلاق معلومات البروفايل عند النقر في أي مكان آخر
            document.addEventListener('click', function() {
                const profileInfo = document.getElementById('profileInfo');
                if (profileInfo) profileInfo.classList.remove('active');
            });

            const videoSelector = document.getElementById('videoSelector');
            if (videoSelector) {
                videoSelector.addEventListener('change', function () {
                    const selectedVideo = videoSelector.value;
                    const videos = document.querySelectorAll('.video');
                    videos.forEach(video => video.style.display = 'none');
                    const videoToShow = document.getElementById(selectedVideo);
                    if (videoToShow) videoToShow.style.display = 'block';
                });
            }
        }
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const errorMessage = document.getElementById('errorMessage');
            currentUsername = username;

            const validUsernames = {
                'CODE1': ['45454', '18234', '19543', '52614', '51367', '74659', '76431', '63824', '72904', '52918', '84957', '71945', '83629', '38241', '47285', '29067', '94185', '90576', '35926', '83415', '47623', '63172', '81023', '67892', '85297', '24785', '74381', '90283', '19473'],
                'CODE2': ['45454', '13227', '66100', '51089', '42877', '92584', '81807', '29699', '96915', '83933', '15134', '85643', '99949', '20995', '39094', '41661', '49757', '52293', '65639', '16495', '17290', '15417', '84597', '16833', '34244', '16228', '57031', '59657', '31693'],
                'CODE3': ['85800', '64622', '48007', '45427', '93111', '99452', '60560', '56689', '13885', '30329', '12103', '18638', '35358', '79862', '40574', '22080', '93577', '75673', '66981', '20482', '62787', '96462', '31451', '89339', '12833', '81447', '96579', '31230'],
                'CODE4': ['23218', '74138', '59055', '40555', '50599','42923', '62461', '53810', '20534', '42979', '34383', '98406', '14639', '92421', '20267', '26378', '12506','39637', '37625', '11908','51746', '70910', '10852', '56540', '99246', '85281', '37906', '38005', '94620', '99935'],
                'CODE5': ['98098', '76246', '12587', '85315', '71752','67905', '35117', '35952', '58172', '19458','69346', '94261', '56608', '50147', '67135','83732', '99279', '52983', '18375', '51392','72980', '53608', '28558', '21305', '70518','58816', '35284', '66266', '64917', '53633']
            };

            let code = '';
            for (const [key, values] of Object.entries(validUsernames)) {
                if (values.includes(username)) {
                    code = key;
                    break;
                }
            }

           if (code) {
    if (errorMessage) errorMessage.textContent = '';

    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html";
}

            } else {
                if (errorMessage) errorMessage.textContent = 'Invalid access code, please try again';
            }
        });
    }

    showLogin();
});
