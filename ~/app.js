import { wino } from './wino-core.js';

async function main() {
    console.log("--- 🚀 المثال الأول: تحليل المشاعر (سيتم إنشاء الدالة وحفظها) ---");
    const sentimentResult = await wino.ai.get.sentiment.twitter("Trump");
    console.log("✅ النتيجة النهائية:", sentimentResult, "\n");

    console.log("--- 🔄 المثال الثاني: تحليل المشاعر مرة أخرى (سيتم استخدام الدالة المخزنة) ---");
    const sentimentResult2 = await wino.ai.get.sentiment.twitter("Biden");
    console.log("✅ النتيجة النهائية:", sentimentResult2, "\n");
    
    console.log("--- 🚀 المثال الثالث: الترجمة (سيتم إنشاء دالة جديدة وحفظها) ---");
    const translationResult = await wino.ai.translate.to.spanish("Hello world");
    console.log("✅ النتيجة النهائية:", translationResult, "\n");
}

main();
