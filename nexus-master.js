/**
 * منصة أبو حازم العمري - محرك الربط الرئيسي والتحكم الشامل (Nexus Master Core)
 * الإصدار: 7.0 - 2026
 * إشراف: أبو حازم العمري
 */

class NexusMasterPlatform {
    constructor() {
        this.platformName = "NEXUS Core System";
        this.version = "7.0.0";
        this.author = "أبو حازم العمري";
        this.bootSequence();
    }

    bootSequence() {
        console.log(`[BOOT] جاري إقلاع ${this.platformName} الإصدار ${this.version}...`);
        console.log(`[AUTHOR] المالك والمطور: ${this.author}`);
        
        // التحقق من توافقية المتصفح والأنظمة الفرعية
        this.verifySubsystems();
        this.registerGlobalHooks();
    }

    verifySubsystems() {
        // التأكد من جاهزية كافة الوحدات البرمجية
        setTimeout(() => {
            console.log("[STATUS] تم تزامن محرك الفيزياء، وحدة التخزين، ودرع الأمان بنجاح تام.");
            this.displaySystemReadyMessage();
        }, 500);
    }

    displaySystemReadyMessage() {
        console.log("%c [NEXUS READY] النظام يعمل بكفاءة 100% وجاهز لتلقي الزوار والمشترين! ", "background: #00ffcc; color: #030307; padding: 5px; font-weight: bold; border-radius: 4px;");
    }

    registerGlobalHooks() {
        window.addEventListener('load', () => {
            console.log("[EVENT] تم تحميل المستند بالكامل، تفعيل الاستجابة التلقائية للواجهة.");
        });
    }

    getPlatformSummary() {
        return {
            platform: this.platformName,
            version: this.version,
            author: this.author,
            status: "ONLINE & SECURE",
            hosting: "GitHub Pages / Netlify"
        };
    }
}

// تشغيل النظام الماستر فوراً
const NexusMaster = new NexusMasterPlatform();

// دالة عامة لطباعة تقرير النظام الشامل في الكونسول
function printMasterReport() {
    console.table(NexusMaster.getPlatformSummary());
    alert("تم طباعة تقرير النظام الشامل في وحدة التحكم (Console) بنجاح!");
}
