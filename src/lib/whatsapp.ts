// WhatsApp 统一配置
export const WHATSAPP_NUMBER = "85255701042"; // 替换为实际的 WhatsApp 号码
export const WHATSAPP_FIRST_MESSAGE = "I would like to resolve my men's health issues";

// 生成 WhatsApp 链接（带 Facebook Pixel 转化追踪）
export function getWhatsAppLink(message: string = WHATSAPP_FIRST_MESSAGE): string {
  // 追踪 WhatsApp 联系转化
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: "WhatsApp Consultation",
      content_category: "Lead Generation",
    });
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
