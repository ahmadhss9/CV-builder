// ============ STATE ============
let currentTemplate = 1;
let userData = {
    photo: 'https://via.placeholder.com/150x150/667eea/ffffff?text=Photo',
    name: 'Your Name',
    jobTitle: 'Your Profession',
    age: '',
    phone: '',
    email: '',
    address: '',
    about: '',
    experience: '',
    education: '',
    skills: '',
    languages: ''
};

// ============ PHOTO UPLOAD ============
document.getElementById('photo').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            userData.photo = event.target.result;
            document.getElementById('photoPreview').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// ============ COLLECT FORM DATA ============
function collectData() {
    userData.name = document.getElementById('name').value || 'Your Name';
    userData.jobTitle = document.getElementById('jobTitle').value || 'Your Profession';
    userData.age = document.getElementById('age').value || '';
    userData.phone = document.getElementById('phone').value || '';
    userData.email = document.getElementById('email').value || '';
    userData.address = document.getElementById('address').value || '';
    userData.about = document.getElementById('about').value || '';
    userData.experience = document.getElementById('experience').value || '';
    userData.education = document.getElementById('education').value || '';
    userData.skills = document.getElementById('skills').value || '';
    userData.languages = document.getElementById('languages').value || '';
}

// ============ HELPERS ============
function getSkillsHTML(wrapInSpans = true) {
    if (!userData.skills) return '';
    const skills = userData.skills.split(',').map(s => s.trim()).filter(Boolean);
    if (wrapInSpans) {
        return skills.map(s => `<span>${s}</span>`).join('');
    }
    return '<ul>' + skills.map(s => `<li>${s}</li>`).join('') + '</ul>';
}

function getLanguagesHTML() {
    if (!userData.languages) return '';
    const langs = userData.languages.split(',').map(s => s.trim()).filter(Boolean);
    return '<ul>' + langs.map(l => `<li>${l}</li>`).join('') + '</ul>';
}

function formatMultiline(text) {
    if (!text) return '';
    return text.split('\n').map(line => `<p>${line}</p>`).join('');
}

// ============ TEMPLATE GENERATORS ============
const templates = {
    1: () => `
        <div class="header-bg">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <div class="header-info">
                <h1>${userData.name}</h1>
                <p>${userData.jobTitle}</p>
            </div>
        </div>
        <div class="body">
            <div class="left-col">
                <div class="section">
                    <h3>📞 Contact</h3>
                    <p>📞 ${userData.phone}</p>
                    <p>📧 ${userData.email}</p>
                    <p>🏠 ${userData.address}</p>
                    <p>🎂 ${userData.age} years</p>
                </div>
                <div class="section">
                    <h3>⭐ Skills</h3>
                    <div class="skills-list">${getSkillsHTML()}</div>
                </div>
                <div class="section">
                    <h3>🌍 Languages</h3>
                    ${getLanguagesHTML()}
                </div>
            </div>
            <div class="right-col">
                <div class="section">
                    <h3>📝 About Me</h3>
                    <p>${userData.about}</p>
                </div>
                <div class="section">
                    <h3>💼 Experience</h3>
                    ${formatMultiline(userData.experience)}
                </div>
                <div class="section">
                    <h3>🎓 Education</h3>
                    ${formatMultiline(userData.education)}
                </div>
            </div>
        </div>
    `,

    2: () => `
        <div class="header-top">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <h1>${userData.name.toUpperCase()}</h1>
            <p>${userData.jobTitle}</p>
            <div class="contact-row">
                <span>📞 ${userData.phone}</span>
                <span>📧 ${userData.email}</span>
                <span>🏠 ${userData.address}</span>
                <span>🎂 ${userData.age}</span>
            </div>
        </div>
        <div class="section">
            <h3>About Me</h3>
            <p>${userData.about}</p>
        </div>
        <div class="section">
            <h3>Experience</h3>
            ${formatMultiline(userData.experience)}
        </div>
        <div class="section">
            <h3>Education</h3>
            ${formatMultiline(userData.education)}
        </div>
        <div class="section">
            <h3>Skills</h3>
            <p>${userData.skills}</p>
        </div>
        <div class="section">
            <h3>Languages</h3>
            <p>${userData.languages}</p>
        </div>
    `,

    3: () => `
        <div class="sidebar">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <h1>${userData.name}</h1>
            <p class="title">${userData.jobTitle}</p>
            <div class="info-block">
                <h3>Contact</h3>
                <p>📞 ${userData.phone}</p>
                <p>📧 ${userData.email}</p>
                <p>🏠 ${userData.address}</p>
                <p>🎂 ${userData.age} years</p>
            </div>
            <div class="info-block">
                <h3>Skills</h3>
                <p>${userData.skills}</p>
            </div>
            <div class="info-block">
                <h3>Languages</h3>
                <p>${userData.languages}</p>
            </div>
        </div>
        <div class="main-content">
            <div class="section">
                <h3>About Me</h3>
                <p>${userData.about}</p>
            </div>
            <div class="section">
                <h3>Experience</h3>
                ${formatMultiline(userData.experience)}
            </div>
            <div class="section">
                <h3>Education</h3>
                ${formatMultiline(userData.education)}
            </div>
        </div>
    `,

    4: () => `
        <div class="top-row">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <div>
                <h1>${userData.name}</h1>
                <p class="title">${userData.jobTitle}</p>
                <p class="contact-line">${userData.phone} • ${userData.email} • ${userData.address}</p>
            </div>
        </div>
        <div class="section">
            <h3>Profile</h3>
            <p>${userData.about}</p>
        </div>
        <div class="section">
            <h3>Experience</h3>
            ${formatMultiline(userData.experience)}
        </div>
        <div class="section">
            <h3>Education</h3>
            ${formatMultiline(userData.education)}
        </div>
        <div class="section">
            <h3>Skills</h3>
            <p>${userData.skills}</p>
        </div>
        <div class="section">
            <h3>Languages</h3>
            <p>${userData.languages}</p>
        </div>
    `,

    5: () => `
        <div class="header">
            <div class="header-left">
                <h1>${userData.name}</h1>
                <p>${userData.jobTitle}</p>
            </div>
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
        </div>
        <div class="info-bar">
            <span>📞 ${userData.phone}</span>
            <span>📧 ${userData.email}</span>
            <span>🏠 ${userData.address}</span>
            <span>🎂 ${userData.age}</span>
        </div>
        <div class="body">
            <div class="section">
                <h3>Professional Summary</h3>
                <p>${userData.about}</p>
            </div>
            <div class="section">
                <h3>Work Experience</h3>
                ${formatMultiline(userData.experience)}
            </div>
            <div class="section">
                <h3>Education</h3>
                ${formatMultiline(userData.education)}
            </div>
            <div class="section">
                <h3>Skills</h3>
                <p>${userData.skills}</p>
            </div>
            <div class="section">
                <h3>Languages</h3>
                <p>${userData.languages}</p>
            </div>
        </div>
    `,

    6: () => `
        <div class="header">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <h1>${userData.name}</h1>
            <p class="title">${userData.jobTitle}</p>
        </div>
        <div class="body">
            <div>
                <div class="section">
                    <h3>Contact</h3>
                    <p>📞 ${userData.phone}</p>
                    <p>📧 ${userData.email}</p>
                    <p>🏠 ${userData.address}</p>
                    <p>🎂 ${userData.age} years</p>
                </div>
                <div class="section">
                    <h3>Skills</h3>
                    <div class="skills-list">${getSkillsHTML()}</div>
                </div>
                <div class="section">
                    <h3>Languages</h3>
                    <p>${userData.languages}</p>
                </div>
            </div>
            <div>
                <div class="section">
                    <h3>About</h3>
                    <p>${userData.about}</p>
                </div>
                <div class="section">
                    <h3>Experience</h3>
                    ${formatMultiline(userData.experience)}
                </div>
                <div class="section">
                    <h3>Education</h3>
                    ${formatMultiline(userData.education)}
                </div>
            </div>
        </div>
    `,

    7: () => `
        <div class="main">
            <h1>${userData.name}</h1>
            <p class="title">${userData.jobTitle}</p>
            <div class="section">
                <h3>About Me</h3>
                <p>${userData.about}</p>
            </div>
            <div class="section">
                <h3>Experience</h3>
                ${formatMultiline(userData.experience)}
            </div>
            <div class="section">
                <h3>Education</h3>
                ${formatMultiline(userData.education)}
            </div>
        </div>
        <div class="sidebar">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <h3>Contact</h3>
            <p>📞 ${userData.phone}</p>
            <p>📧 ${userData.email}</p>
            <p>🏠 ${userData.address}</p>
            <p>🎂 ${userData.age} years</p>
            <h3>Skills</h3>
            <p>${userData.skills}</p>
            <h3>Languages</h3>
            <p>${userData.languages}</p>
        </div>
    `,

    8: () => `
        <div class="header">
            <div class="header-content">
                <img src="${userData.photo}" class="cv-photo" alt="Photo">
                <div>
                    <h1>${userData.name}</h1>
                    <p>${userData.jobTitle}</p>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="section">
                <h3>About Me</h3>
                <p>${userData.about}</p>
            </div>
            <div class="section">
                <h3>Contact Info</h3>
                <p>📞 ${userData.phone}</p>
                <p>📧 ${userData.email}</p>
                <p>🏠 ${userData.address}</p>
                <p>🎂 ${userData.age} years</p>
            </div>
            <div class="section">
                <h3>Experience</h3>
                ${formatMultiline(userData.experience)}
            </div>
            <div class="section">
                <h3>Education</h3>
                ${formatMultiline(userData.education)}
            </div>
            <div class="section">
                <h3>Skills</h3>
                <div class="skills-list">${getSkillsHTML()}</div>
            </div>
            <div class="section">
                <h3>Languages</h3>
                <p>${userData.languages}</p>
            </div>
        </div>
    `,

    9: () => `
        <div class="header">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <div>
                <h1>${userData.name}</h1>
                <p>${userData.jobTitle}</p>
            </div>
        </div>
        <div class="body">
            <div class="info-grid">
                <div><strong>Phone</strong>${userData.phone}</div>
                <div><strong>Email</strong>${userData.email}</div>
                <div><strong>Address</strong>${userData.address}</div>
                <div><strong>Age</strong>${userData.age} years</div>
            </div>
            <div class="section">
                <h3>About Me</h3>
                <p>${userData.about}</p>
            </div>
            <div class="section">
                <h3>Experience</h3>
                ${formatMultiline(userData.experience)}
            </div>
            <div class="section">
                <h3>Education</h3>
                ${formatMultiline(userData.education)}
            </div>
            <div class="section">
                <h3>Skills</h3>
                <p>${userData.skills}</p>
            </div>
            <div class="section">
                <h3>Languages</h3>
                <p>${userData.languages}</p>
            </div>
        </div>
    `,

    10: () => `
        <div class="top">
            <img src="${userData.photo}" class="cv-photo" alt="Photo">
            <div class="top-info">
                <h1>${userData.name}</h1>
                <p class="title">${userData.jobTitle}</p>
                <div class="contact-grid">
                    <div>📞 ${userData.phone}</div>
                    <div>📧 ${userData.email}</div>
                    <div>🏠 ${userData.address}</div>
                    <div>🎂 ${userData.age} years</div>
                </div>
            </div>
        </div>
        <div class="section">
            <h3>Professional Summary</h3>
            <p>${userData.about}</p>
        </div>
        <div class="section">
            <h3>Work Experience</h3>
            ${formatMultiline(userData.experience)}
        </div>
        <div class="section">
            <h3>Education</h3>
            ${formatMultiline(userData.education)}
        </div>
        <div class="section">
            <h3>Core Skills</h3>
            <div class="skills-grid">${getSkillsHTML()}</div>
        </div>
        <div class="section">
            <h3>Languages</h3>
            <p>${userData.languages}</p>
        </div>
    `
};

// ============ RENDER CV ============
function renderCV() {
    collectData();
    const preview = document.getElementById('cvPreview');
    preview.className = `cv-template template-${currentTemplate}`;
    preview.innerHTML = templates[currentTemplate]();
}

// ============ TEMPLATE SELECTION ============
document.querySelectorAll('.tpl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTemplate = parseInt(btn.dataset.template);
        renderCV();
    });
});

// ============ GENERATE BUTTON ============
document.getElementById('generateBtn').addEventListener('click', () => {
    renderCV();
    // Smooth scroll to preview on mobile
    if (window.innerWidth < 968) {
        document.getElementById('cvPreview').scrollIntoView({ behavior: 'smooth' });
    }
    // Success feedback
    const btn = document.getElementById('generateBtn');
    const original = btn.textContent;
    btn.textContent = '✅ CV Generated!';
    btn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
    }, 1500);
});

// ============ AUTO UPDATE ON FORM CHANGE ============
document.querySelectorAll('#cvForm input, #cvForm textarea').forEach(input => {
    input.addEventListener('input', () => {
        renderCV();
    });
});

// ============ DOWNLOAD AS PNG ============
document.getElementById('downloadBtn').addEventListener('click', async () => {
    const btn = document.getElementById('downloadBtn');
    const originalText = btn.textContent;
    btn.textContent = '⏳ Generating...';
    btn.disabled = true;

    try {
        const cvElement = document.getElementById('cvPreview');
        
        const canvas = await html2canvas(cvElement, {
            scale: 2, // Higher quality
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false
        });

        // Convert to PNG and download
        const link = document.createElement('a');
        const fileName = `CV_${userData.name.replace(/\s+/g, '_')}_Template${currentTemplate}.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();

        btn.textContent = '✅ Downloaded!';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    } catch (error) {
        console.error('Download error:', error);
        alert('Error downloading CV. Please try again.');
        btn.textContent = originalText;
        btn.disabled = false;
    }
});

// ============ PRINT ============
document.getElementById('printBtn').addEventListener('click', () => {
    const cvHTML = document.getElementById('cvPreview').outerHTML;
    const stylesheets = Array.from(document.styleSheets).map(sheet => {
        try {
            return Array.from(sheet.cssRules).map(rule => rule.cssText).join('\n');
        } catch (e) {
            return '';
        }
    }).join('\n');

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Print CV - ${userData.name}</title>
                <style>${stylesheets}</style>
                <style>
                    body { margin: 0; padding: 20px; }
                    @media print {
                        body { padding: 0; }
                        .cv-template { box-shadow: none !important; }
                    }
                </style>
            </head>
            <body>${cvHTML}</body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 500);
});

// ============ INITIAL RENDER ============
renderCV();