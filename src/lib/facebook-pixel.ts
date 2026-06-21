// Facebook Pixel 配置和追踪函数

declare global {
  interface Window {
    fbq: any;
  }
}

const PIXEL_ID = "1075309528395221";

// 初始化 Facebook Pixel
export function initFacebookPixel(): void {
  if (typeof window === "undefined") return;

  // 如果已经初始化过，跳过
  if (window.fbq) return;

  // 加载 Facebook Pixel 脚本
  (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  // 初始化 Pixel
  window.fbq("init", PIXEL_ID);
  // 追踪页面浏览
  window.fbq("track", "PageView");
}

// 追踪 WhatsApp 联系转化
export function trackWhatsAppContact(): void {
  if (typeof window === "undefined" || !window.fbq) return;
  
  window.fbq("track", "Contact", {
    content_name: "WhatsApp Consultation",
    content_category: "Lead Generation",
  });
}

// 通用事件追踪
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window === "undefined" || !window.fbq) return;
  
  window.fbq("track", eventName, params);
}
