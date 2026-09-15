/**
 * منصة أبو حازم العمري - وحدة إدارة التخزين والروابط المباشرة (Storage & Links Core)
 * الإصدار: 4.0 - 2026
 */

class NexusStorageManager {
    constructor() {
        this.repositoryName = "joml-platform";
        this.author = "أبو حازم العمري";
        this.hostedPlatform = "GitHub Pages & Netlify";
        this.packagesRegistry = [];
        this.initRegistry();
    }

    initRegistry() {
        console.log("[STORAGE CORE] جاري تهيئة جدول الروابط المباشرة للملفات...");
        // تسجيل الحزم الافتراضية المتاحة للتحميل الفوري
        this.registerPackage({
            id: "pkg-01",
            name: "NEXUS Physics Engine Core",
            version: "v4.0",
            fileType: ".zip",
            size: "340 KB",
            directUrl: "#"
        });
    }

    registerPackage(pkgData) {
        this.packagesRegistry.push(pkgData);
        console.log(`[PACKAGE ADDED] تمت إضافة الحزمة: ${pkgData.name} (${pkgData.version}) بنجاح.`);
    }

    generateDirectDownloadLink(packageId) {
        const targetPkg = this.packagesRegistry.find(p => p.id === packageId);
        if (!targetPkg) {
            console.error("[ERROR] الحزمة المطلوبة غير موجودة في السجل!");
            return null;
        }

        // توليد رابط التحميل المباشر الآمن
        const secureLink = `https://${this.repositoryName}.github.io/downloads/${targetPkg.id}${targetPkg.fileType}`;
        console.log(`[LINK GENERATED] رابط التحميل المباشر: ${secureLink}`);
        return secureLink;
    }

    renderDownloadInterface(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let htmlContent = `<div class="storage-box" style="background:rgba(10,10,20,0.8); border:1px solid #00ffcc; padding:20px; border-radius:10px; margin-top:20px;">`;
        htmlContent += `<h3 style="color:#00ffcc; margin-bottom:15px;">مركز التحميل المباشر (.ZIP)</h3>`;
        
        this.packagesRegistry.forEach(pkg => {
            htmlContent += `
                <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,255,204,0.05); padding:10px 15px; border-radius:6px; margin-bottom:10px;">
                    <div>
                        <strong>${pkg.name}</strong> <span style="color:#a0a0c0; font-size:12px;">(${pkg.size})</span>
                    </div>
                    <button onclick="handleDirectDownload('${pkg.id}')" style="background:#00ffcc; color:#030307; border:none; padding:8px 15px; border-radius:5px; font-weight:bold; cursor:pointer;">تحميل مباشر</button>
                </div>
            `;
        });

        htmlContent += `</div>`;
        container.innerHTML = htmlContent;
    }
}

// تشغيل مدير التخزين العام
const NexusStorage = new NexusStorageManager();

// دالة تفاعلية لتنفيذ التحميل المباشر
function handleDirectDownload(pkgId) {
    const link = NexusStorage.generateDirectDownloadLink(pkgId);
    if (link) {
        alert("تم توليد رابط التحميل المباشر بنجاح! جاري بدء التنزيل...");
        // محاكاة بدء التحميل
        console.log("Downloading from: " + link);
    }
}
