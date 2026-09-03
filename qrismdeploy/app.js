(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    qrName: $("qrName"),
    typeTabs: $("typeTabs"),
    panelText: $("panel-text"),
    panelWifi: $("panel-wifi"),
    panelVcard: $("panel-vcard"),
    panelMailto: $("panel-mailto"),
    panelEvent: $("panel-event"),
    panelPayment: $("panel-payment"),
    panelSocial: $("panel-social"),
    content: $("content"),
    wifiSsid: $("wifiSsid"),
    wifiEncryption: $("wifiEncryption"),
    wifiPassword: $("wifiPassword"),
    wifiPasswordGroup: $("wifiPasswordGroup"),
    wifiHidden: $("wifiHidden"),
    vcFirst: $("vcFirst"),
    vcLast: $("vcLast"),
    vcOrg: $("vcOrg"),
    vcTitle: $("vcTitle"),
    vcPhone: $("vcPhone"),
    vcEmail: $("vcEmail"),
    vcUrl: $("vcUrl"),
    vcSocial: $("vcSocial"),
    vcAddress: $("vcAddress"),
    mailTo: $("mailTo"),
    mailSubject: $("mailSubject"),
    mailBody: $("mailBody"),
    evTitle: $("evTitle"),
    evLocation: $("evLocation"),
    evStart: $("evStart"),
    evEnd: $("evEnd"),
    evDescription: $("evDescription"),
    paymentService: $("paymentService"),
    paymentHandle: $("paymentHandle"),
    paymentHandleLabel: $("paymentHandleLabel"),
    paymentAmount: $("paymentAmount"),
    paymentAmountGroup: $("paymentAmountGroup"),
    socialPlatform: $("socialPlatform"),
    socialHandle: $("socialHandle"),
    socialHandleLabel: $("socialHandleLabel"),
    presetRow: $("presetRow"),
    dotType: $("dotType"),
    cornerSquareType: $("cornerSquareType"),
    cornerDotType: $("cornerDotType"),
    gradientType: $("gradientType"),
    colorModeToggle: $("colorModeToggle"),
    gradientShape: $("gradientShape"),
    gradientShapeGroup: $("gradientShapeGroup"),
    colorA: $("colorA"),
    colorAValue: $("colorAValue"),
    colorB: $("colorB"),
    colorBValue: $("colorBValue"),
    colorBGroup: $("colorBGroup"),
    bgColor: $("bgColor"),
    bgColorValue: $("bgColorValue"),
    transparentBg: $("transparentBg"),
    frameStyle: $("frameStyle"),
    frameText: $("frameText"),
    frameTextGroup: $("frameTextGroup"),
    frameSvgNote: $("frameSvgNote"),
    logoInput: $("logoInput"),
    logoDrop: $("logoDrop"),
    logoDropText: $("logoDropText"),
    logoPreviewImg: $("logoPreviewImg"),
    logoRemoveBtn: $("logoRemoveBtn"),
    logoOptionsRow: $("logoOptionsRow"),
    logoSize: $("logoSize"),
    logoSizeValue: $("logoSizeValue"),
    hideDots: $("hideDots"),
    ecLevel: $("ecLevel"),
    exportSize: $("exportSize"),
    qrCanvas: $("qrCanvas"),
    downloadPng: $("downloadPng"),
    downloadSvg: $("downloadSvg"),
    saveBtn: $("saveBtn"),
    scanHint: $("scanHint"),
    historyBtn: $("historyBtn"),
    historyBackdrop: $("historyBackdrop"),
    historyCloseBtn: $("historyCloseBtn"),
    historyClearBtn: $("historyClearBtn"),
    historyList: $("historyList"),
    historyEmpty: $("historyEmpty"),
  };

  const PRESETS = [
    { name: "Aurora", type: "linear", a: "#7c5cff", b: "#22d3ee", bg: "#0b0c10" },
    { name: "Klassisch", type: "solid", a: "#000000", b: "#000000", bg: "#ffffff" },
    { name: "Sunset", type: "linear", a: "#ff5cad", b: "#ffb648", bg: "#0b0c10" },
    { name: "Mint", type: "linear", a: "#22d3ee", b: "#4ade80", bg: "#0b0c10" },
    { name: "Nordic", type: "radial", a: "#7c5cff", b: "#3b82f6", bg: "#f5f6fa" },
    { name: "Mono", type: "solid", a: "#f5f6fa", b: "#f5f6fa", bg: "#0b0c10" },
    { name: "Ink", type: "solid", a: "#14161c", b: "#14161c", bg: "#f5f6fa" },
    { name: "Neon", type: "linear", a: "#ff2fd6", b: "#00e5ff", bg: "#050507" },
    { name: "Citrus", type: "linear", a: "#ffd23f", b: "#ff8c42", bg: "#0b0c10" },
    { name: "Ocean", type: "linear", a: "#2dd4bf", b: "#3b82f6", bg: "#071019" },
    { name: "Berry", type: "linear", a: "#c026d3", b: "#7c3aed", bg: "#150a1f" },
    { name: "Forest", type: "linear", a: "#a3e635", b: "#16a34a", bg: "#0a140d" },
    { name: "Rosé", type: "linear", a: "#fb7185", b: "#fbbf24", bg: "#fff7f0" },
    { name: "Slate", type: "solid", a: "#1e293b", b: "#1e293b", bg: "#f8fafc" },
    { name: "Gold", type: "linear", a: "#fbbf24", b: "#f59e0b", bg: "#0b0c10" },
    { name: "Coral", type: "radial", a: "#fb7185", b: "#f97316", bg: "#fff8f5" },
    { name: "Midnight", type: "linear", a: "#6366f1", b: "#3b82f6", bg: "#04050a" },
  ];

  const FRAMES = [
    { id: "none", name: "Kein Rahmen" },
    { id: "card", name: "Karte", kind: "border", style: "solid", radius: 28, width: 3 },
    { id: "thin", name: "Dünner Rahmen", kind: "border", style: "solid", radius: 12, width: 2 },
    { id: "thick", name: "Breiter Rahmen", kind: "border", style: "solid", radius: 20, width: 10 },
    { id: "square", name: "Eckig", kind: "border", style: "solid", radius: 0, width: 4 },
    { id: "double", name: "Doppellinie", kind: "border", style: "double", radius: 18, width: 2 },
    { id: "dashed", name: "Gestrichelt", kind: "border", style: "dashed", radius: 16, width: 3 },
    { id: "brackets", name: "Eckklammern", kind: "brackets" },
    { id: "bracketsThin", name: "Eckklammern Fein", kind: "brackets", len: 0.09, width: 0.005, cap: "butt", join: "miter" },
    { id: "bracketsRound", name: "Eckklammern Rund", kind: "brackets", len: 0.14, width: 0.018, cap: "round", join: "round" },
    { id: "bracketsBadge", name: "Eckklammern + Badge", kind: "bracketsBadge" },
    { id: "dots", name: "Eckpunkte", kind: "cornerDots" },
    { id: "ring", name: "Ring-Badge", kind: "ring" },
    { id: "shadow", name: "Weicher Schatten", kind: "shadow" },
    { id: "captionBottom", name: "Banner unten", kind: "caption", position: "bottom" },
    { id: "captionTop", name: "Banner oben", kind: "caption", position: "top" },
    { id: "captionBoth", name: "Banner oben & unten", kind: "caption", position: "both" },
    { id: "ticket", name: "Ticket", kind: "ticket" },
    { id: "speech", name: "Sprechblase", kind: "speech" },
    { id: "sticker", name: "Sticker", kind: "sticker" },
    { id: "arrow", name: "Pfeil-Hinweis", kind: "arrow" },
    { id: "ribbon", name: "Eckband", kind: "ribbon" },
    { id: "stamp", name: "Stempel", kind: "stamp" },
    { id: "stickyNote", name: "Klebezettel", kind: "stickyNote" },
    { id: "burst", name: "Comic-Burst", kind: "burst" },
    { id: "tag", name: "Banner-Etikett", kind: "tag" },
    { id: "tab", name: "Reiter unten", kind: "tab" },
    { id: "vertical", name: "Vertikaler Schriftzug", kind: "vertical" },
    { id: "cornerIcon", name: "Eckbadge mit Symbol", kind: "cornerIcon" },
    { id: "house", name: "Haus", kind: "house" },
  ];

  const CAPTION_KINDS = new Set([
    "caption", "ticket", "speech", "sticker", "arrow", "ribbon", "stamp", "stickyNote", "burst",
    "bracketsBadge", "tag", "tab", "vertical", "cornerIcon", "house",
  ]);

  // Rahmen ohne eigenen Text zeigen automatisch einen Hinweis auf die Art des Inhalts an.
  const TYPE_CAPTIONS = {
    text: "LINK",
    wifi: "WLAN",
    vcard: "KONTAKT",
    mailto: "E-MAIL",
    event: "TERMIN",
    payment: "SPENDEN",
    social: "SOCIAL",
  };

  function defaultCaptionFor(state) {
    return TYPE_CAPTIONS[state.activeType] || "SCAN MICH";
  }

  function getFrame(id) {
    return FRAMES.find((f) => f.id === id) || FRAMES[0];
  }

  let logoDataUrl = null;
  let qrCode = null;
  let qrPreviewMode = null;
  let activeType = "text";
  let renderToken = 0;

  function escapeWifiField(str) {
    return String(str)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/:/g, "\\:")
      .replace(/"/g, '\\"');
  }

  function escapeVCardField(str) {
    return String(str)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\n/g, "\\n");
  }

  // iCalendar uses the same escaping rules as vCard for TEXT properties.
  const escapeICalField = escapeVCardField;

  function toICalDateTime(localDatetimeValue) {
    if (!localDatetimeValue) return "";
    const digits = localDatetimeValue.replace(/[-:]/g, "");
    return digits.length === 13 ? `${digits}00` : digits;
  }

  function nowICalUtcStamp() {
    return `${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
  }

  const SOCIAL_URL_BUILDERS = {
    instagram: (h) => `https://instagram.com/${h}`,
    tiktok: (h) => `https://tiktok.com/@${h}`,
    youtube: (h) => `https://youtube.com/@${h}`,
    facebook: (h) => `https://facebook.com/${h}`,
    x: (h) => `https://x.com/${h}`,
    linkedin: (h) => `https://linkedin.com/in/${h}`,
    spotify: (h) => (/^https?:\/\//i.test(h) ? h : `https://${h}`),
    custom: (h) => (/^https?:\/\//i.test(h) ? h : `https://${h}`),
  };

  // qr-code-styling encodes non-ASCII characters as raw Latin-1 bytes instead of UTF-8,
  // which many scanners (e.g. umlauts in WLAN/vCard fields) then fail to read.
  // Pre-encoding to a UTF-8 byte string forces it through unchanged and fixes decoding.
  function toQrSafeUtf8(str) {
    try {
      return unescape(encodeURIComponent(str));
    } catch (e) {
      return str;
    }
  }

  function slugifyFilename(str) {
    const map = { ä: "ae", ö: "oe", ü: "ue", ß: "ss", Ä: "Ae", Ö: "Oe", Ü: "Ue" };
    const slug = String(str || "")
      .trim()
      .replace(/[äöüßÄÖÜ]/g, (c) => map[c] || c)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
    return slug || "qrism-code";
  }

  // --- State: alle formularrelevanten Felder als flaches Objekt, damit sich
  // eine Konfiguration vollständig im Verlauf speichern und wiederherstellen lässt.
  const STATE_FIELD_IDS = [
    "qrName",
    "content",
    "wifiSsid", "wifiEncryption", "wifiPassword", "wifiHidden",
    "vcFirst", "vcLast", "vcOrg", "vcTitle", "vcPhone", "vcEmail", "vcUrl", "vcSocial", "vcAddress",
    "mailTo", "mailSubject", "mailBody",
    "evTitle", "evLocation", "evStart", "evEnd", "evDescription",
    "paymentService", "paymentHandle", "paymentAmount",
    "socialPlatform", "socialHandle",
    "dotType", "cornerSquareType", "cornerDotType", "gradientType",
    "colorA", "colorB", "bgColor", "transparentBg",
    "frameStyle", "frameText",
    "ecLevel", "exportSize",
  ];

  function collectState() {
    const state = { activeType };
    STATE_FIELD_IDS.forEach((id) => {
      const el = els[id];
      if (!el) return;
      state[id] = el.type === "checkbox" ? el.checked : el.value;
    });
    return state;
  }

  function applyState(state) {
    STATE_FIELD_IDS.forEach((id) => {
      const el = els[id];
      if (!el || !(id in state)) return;
      if (el.type === "checkbox") el.checked = state[id];
      else el.value = state[id];
    });
    syncColorLabels();
    syncColorModeUI();
    toggleWifiPasswordVisibility();
    togglePaymentFields();
    updateSocialPlaceholder();
    updateFrameFieldVisibility();
    switchType(state.activeType || "text");
  }

  function getContentStringFromState(state) {
    if (state.activeType === "wifi") {
      const ssid = state.wifiSsid.trim();
      if (!ssid) return "";
      const enc = state.wifiEncryption;
      const hidden = state.wifiHidden ? "true" : "false";
      const passPart = enc === "nopass" ? "" : `P:${escapeWifiField(state.wifiPassword)};`;
      return `WIFI:T:${enc};S:${escapeWifiField(ssid)};${passPart}H:${hidden};;`;
    }

    if (state.activeType === "vcard") {
      const first = state.vcFirst.trim();
      const last = state.vcLast.trim();
      if (!first && !last) return "";
      const lines = ["BEGIN:VCARD", "VERSION:3.0"];
      lines.push(`N:${escapeVCardField(last)};${escapeVCardField(first)};;;`);
      lines.push(`FN:${escapeVCardField([first, last].filter(Boolean).join(" "))}`);
      if (state.vcOrg.trim()) lines.push(`ORG:${escapeVCardField(state.vcOrg.trim())}`);
      if (state.vcTitle.trim()) lines.push(`TITLE:${escapeVCardField(state.vcTitle.trim())}`);
      if (state.vcPhone.trim()) lines.push(`TEL;TYPE=CELL:${escapeVCardField(state.vcPhone.trim())}`);
      if (state.vcEmail.trim()) lines.push(`EMAIL:${escapeVCardField(state.vcEmail.trim())}`);
      if (state.vcUrl.trim()) lines.push(`URL;TYPE=Website:${escapeVCardField(state.vcUrl.trim())}`);
      if (state.vcSocial.trim()) lines.push(`URL;TYPE=Social:${escapeVCardField(state.vcSocial.trim())}`);
      if (state.vcAddress.trim()) lines.push(`ADR;TYPE=HOME:;;${escapeVCardField(state.vcAddress.trim())};;;;`);
      lines.push("END:VCARD");
      return lines.join("\n");
    }

    if (state.activeType === "mailto") {
      const to = state.mailTo.trim();
      if (!to) return "";
      const subject = state.mailSubject.trim();
      const body = state.mailBody.trim();
      const params = [];
      if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
      if (body) params.push(`body=${encodeURIComponent(body)}`);
      return `mailto:${to}${params.length ? "?" + params.join("&") : ""}`;
    }

    if (state.activeType === "event") {
      const title = state.evTitle.trim();
      const start = state.evStart;
      if (!title || !start) return "";
      const end = state.evEnd || start;
      const location = state.evLocation.trim();
      const description = state.evDescription.trim();
      const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//QRISM//DE", "BEGIN:VEVENT"];
      lines.push(`UID:${Date.now()}-${Math.random().toString(36).slice(2, 8)}@qrism.app`);
      lines.push(`DTSTAMP:${nowICalUtcStamp()}`);
      lines.push(`DTSTART:${toICalDateTime(start)}`);
      lines.push(`DTEND:${toICalDateTime(end)}`);
      lines.push(`SUMMARY:${escapeICalField(title)}`);
      if (location) lines.push(`LOCATION:${escapeICalField(location)}`);
      if (description) lines.push(`DESCRIPTION:${escapeICalField(description)}`);
      lines.push("END:VEVENT", "END:VCALENDAR");
      return lines.join("\r\n");
    }

    if (state.activeType === "payment") {
      const service = state.paymentService;
      const handle = state.paymentHandle.trim();
      if (!handle) return "";
      if (service === "custom") {
        return /^https?:\/\//i.test(handle) ? handle : `https://${handle}`;
      }
      const clean = handle.replace(/^@/, "").replace(/^https?:\/\/(www\.)?(paypal\.me|ko-fi\.com)\//i, "");
      if (service === "paypal") {
        const amount = state.paymentAmount.trim().replace(",", ".");
        return `https://paypal.me/${encodeURIComponent(clean)}${amount ? "/" + encodeURIComponent(amount) : ""}`;
      }
      return `https://ko-fi.com/${encodeURIComponent(clean)}`;
    }

    if (state.activeType === "social") {
      const platform = state.socialPlatform;
      let handle = state.socialHandle.trim();
      if (!handle) return "";
      if (/^https?:\/\//i.test(handle)) return handle;
      handle = handle.replace(/^@/, "");
      const builder = SOCIAL_URL_BUILDERS[platform] || SOCIAL_URL_BUILDERS.custom;
      return builder(encodeURIComponent(handle).replace(/%2F/g, "/"));
    }

    return state.content;
  }

  function buildOptionsFromState(state, size) {
    const gradientType = state.gradientType;
    const colorA = state.colorA;
    const colorB = state.colorB;

    const dotsOptions = { type: state.dotType };
    const cornersSquareOptions = { type: state.cornerSquareType };
    const cornersDotOptions = { type: state.cornerDotType };

    if (gradientType === "solid") {
      // qr-code-styling's update() merges options rather than replacing them, so a
      // previously-set gradient must be explicitly cleared or it keeps rendering.
      dotsOptions.color = colorA;
      dotsOptions.gradient = null;
      cornersSquareOptions.color = colorA;
      cornersSquareOptions.gradient = null;
      cornersDotOptions.color = colorA;
      cornersDotOptions.gradient = null;
    } else {
      const gradient = {
        type: gradientType,
        rotation: gradientType === "linear" ? Math.PI / 4 : 0,
        colorStops: [
          { offset: 0, color: colorA },
          { offset: 1, color: colorB },
        ],
      };
      dotsOptions.color = null;
      dotsOptions.gradient = gradient;
      cornersSquareOptions.color = null;
      cornersSquareOptions.gradient = gradient;
      cornersDotOptions.color = null;
      cornersDotOptions.gradient = gradient;
    }

    const hasLogo = !!logoDataUrl;
    let ecLevel = state.ecLevel;
    if (ecLevel === "auto") ecLevel = hasLogo ? "H" : "M";

    const logoSizeRatio = Number(els.logoSize.value) / 100;
    const data = getContentStringFromState(state);

    return {
      width: size,
      height: size,
      data: toQrSafeUtf8(data) || " ",
      margin: 10,
      qrOptions: { errorCorrectionLevel: ecLevel },
      image: logoDataUrl || undefined,
      imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: els.hideDots.checked,
        imageSize: logoSizeRatio,
        margin: 6,
      },
      dotsOptions,
      cornersSquareOptions,
      cornersDotOptions,
      backgroundOptions: {
        color: state.transparentBg ? "transparent" : state.bgColor,
      },
    };
  }

  // --- Rahmen: Frames werden per Canvas um das (bereits fertig gerenderte) QR-Bild
  // herum gezeichnet. So bleiben Vorschau und PNG-Export exakt identisch.

  function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function contrastColor(hex) {
    const c = String(hex || "#000000").replace("#", "");
    const r = parseInt(c.substring(0, 2), 16) || 0;
    const g = parseInt(c.substring(2, 4), 16) || 0;
    const b = parseInt(c.substring(4, 6), 16) || 0;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#0b0c10" : "#f5f6fa";
  }

  function drawCornerBrackets(ctx, x, y, size, len, width, color, opts) {
    opts = opts || {};
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = opts.cap || "round";
    ctx.lineJoin = opts.join || "miter";
    ctx.setLineDash(opts.dashed ? [width * 2.2, width * 1.6] : []);
    [
      [x, y, 1, 1],
      [x + size, y, -1, 1],
      [x, y + size, 1, -1],
      [x + size, y + size, -1, -1],
    ].forEach(([cx, cy, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy + len * dy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx + len * dx, cy);
      ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  async function rasterizeQr(state, size) {
    const options = buildOptionsFromState(state, size);
    options.type = "canvas";
    const instance = new QRCodeStyling(options);
    const blob = await instance.getRawData("png");
    return createImageBitmap(blob);
  }

  function drawFramedQr(canvasSize, frame, state, qrBitmap) {
    const canvas = document.createElement("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext("2d");

    const accent = state.colorA;
    const bg = state.transparentBg ? null : state.bgColor;
    const bgOrWhite = bg || "#ffffff";
    const caption = (state.frameText && state.frameText.trim()) || defaultCaptionFor(state);

    const PAD = Math.round(canvasSize * 0.07);
    const BAND = Math.round(canvasSize * 0.16);

    function fillBg(radius) {
      if (!bg) return;
      ctx.fillStyle = bg;
      roundRectPath(ctx, 0, 0, canvasSize, canvasSize, radius);
      ctx.fill();
    }

    function drawBand(y, h, text) {
      ctx.fillStyle = accent;
      ctx.fillRect(0, y, canvasSize, h);
      ctx.fillStyle = contrastColor(accent);
      ctx.font = `700 ${Math.round(h * 0.32)}px -apple-system, "Segoe UI", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text.toUpperCase(), canvasSize / 2, y + h / 2, canvasSize - PAD * 1.5);
    }

    let qrX = PAD;
    let qrY = PAD;
    let qrSize = canvasSize - PAD * 2;

    // Rahmenmaße (radius/width) sind auf eine Referenzgröße von 320px getunt —
    // hier auf die tatsächliche Canvasgröße hochskaliert, damit Vorschau und
    // hochauflösender Export (bis 2048px) identisch aussehen.
    const REF = 320;
    const scale = canvasSize / REF;

    switch (frame.kind) {
      case "border": {
        const radius = frame.radius * scale;
        const width = Math.max(1.5, frame.width * scale);
        fillBg(radius);
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const inset = width / 2;
        ctx.strokeStyle = accent;
        ctx.lineWidth = width;
        if (frame.style === "dashed") ctx.setLineDash([width * 2.4, width * 1.8]);
        roundRectPath(ctx, inset, inset, canvasSize - width, canvasSize - width, radius);
        ctx.stroke();
        if (frame.style === "double") {
          const gap = width * 2.6;
          roundRectPath(
            ctx,
            inset + gap,
            inset + gap,
            canvasSize - width - gap * 2,
            canvasSize - width - gap * 2,
            Math.max(0, radius - gap)
          );
          ctx.stroke();
        }
        ctx.setLineDash([]);
        break;
      }
      case "brackets": {
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const off = PAD * 0.5;
        const len = canvasSize * (frame.len || 0.12);
        const width = Math.max(2, canvasSize * (frame.width || 0.012));
        drawCornerBrackets(ctx, off, off, canvasSize - off * 2, len, width, accent, {
          cap: frame.cap,
          join: frame.join,
          dashed: frame.dashed,
        });
        break;
      }
      case "cornerDots": {
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const off = PAD * 0.55;
        const r = canvasSize * 0.022;
        ctx.fillStyle = accent;
        [
          [off, off], [canvasSize - off, off],
          [off, canvasSize - off], [canvasSize - off, canvasSize - off],
        ].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fill();
        });
        break;
      }
      case "ring": {
        fillBg(canvasSize / 2);
        const ringPad = PAD * 1.35;
        qrSize = canvasSize - ringPad * 2;
        qrX = qrY = ringPad;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        ctx.strokeStyle = accent;
        ctx.lineWidth = Math.round(canvasSize * 0.025);
        ctx.beginPath();
        ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2 - ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
      case "shadow": {
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.45)";
        ctx.shadowBlur = canvasSize * 0.05;
        ctx.shadowOffsetY = canvasSize * 0.015;
        if (bg) {
          ctx.fillStyle = bg;
          roundRectPath(ctx, PAD * 0.6, PAD * 0.6, canvasSize - PAD * 1.2, canvasSize - PAD * 1.2, 24 * scale);
          ctx.fill();
        }
        ctx.restore();
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        break;
      }
      case "caption": {
        fillBg(24 * scale);
        const topBand = frame.position === "top" || frame.position === "both";
        const bottomBand = frame.position === "bottom" || frame.position === "both";
        qrY = topBand ? BAND : PAD;
        const bottomY = bottomBand ? canvasSize - BAND : canvasSize - PAD;
        qrSize = Math.min(canvasSize - PAD * 2, bottomY - qrY);
        qrX = (canvasSize - qrSize) / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        if (topBand) drawBand(0, BAND, caption);
        if (bottomBand) drawBand(canvasSize - BAND, BAND, caption);
        break;
      }
      case "ticket": {
        fillBg(20 * scale);
        const bandH = BAND * 0.72;
        ctx.strokeStyle = "rgba(128,128,128,0.5)";
        ctx.setLineDash([8, 8]);
        ctx.beginPath();
        ctx.moveTo(PAD * 0.6, bandH);
        ctx.lineTo(canvasSize - PAD * 0.6, bandH);
        ctx.stroke();
        ctx.setLineDash([]);
        const notchR = canvasSize * 0.025;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath(); ctx.arc(0, bandH, notchR, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(canvasSize, bandH, notchR, 0, Math.PI * 2); ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = accent;
        ctx.font = `700 ${Math.round(bandH * 0.32)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), canvasSize / 2, bandH / 2, canvasSize - PAD * 1.5);
        qrY = bandH + PAD * 0.6;
        qrSize = Math.min(canvasSize - PAD * 2, canvasSize - qrY - PAD * 0.6);
        qrX = (canvasSize - qrSize) / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        break;
      }
      case "speech": {
        const tailH = canvasSize * 0.06;
        if (bg) {
          ctx.fillStyle = bg;
          roundRectPath(ctx, 0, 0, canvasSize, canvasSize - tailH, 26 * scale);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(canvasSize * 0.4, canvasSize - tailH);
          ctx.lineTo(canvasSize * 0.5, canvasSize);
          ctx.lineTo(canvasSize * 0.6, canvasSize - tailH);
          ctx.closePath();
          ctx.fill();
        }
        qrSize = canvasSize - tailH - PAD * 2;
        qrX = qrY = PAD;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        break;
      }
      case "sticker": {
        const cx = canvasSize / 2;
        const cy = canvasSize / 2;
        const R = canvasSize * 0.46;
        const amp = canvasSize * 0.018;
        const bumps = 14;
        ctx.fillStyle = accent;
        ctx.beginPath();
        const steps = 240;
        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2;
          const r = R + amp * Math.sin(t * bumps);
          const x = cx + r * Math.cos(t);
          const y = cy + r * Math.sin(t);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        const innerR = R - canvasSize * 0.05;
        ctx.fillStyle = bgOrWhite;
        ctx.beginPath();
        ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
        ctx.fill();
        qrSize = innerR;
        qrX = cx - qrSize / 2;
        qrY = cy - qrSize * 0.68;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const chipH = canvasSize * 0.09;
        const chipY = cy + innerR * 0.62;
        ctx.font = `800 ${Math.round(chipH * 0.5)}px -apple-system, "Segoe UI", sans-serif`;
        const textW = ctx.measureText(caption.toUpperCase()).width;
        const chipW = Math.min(innerR * 1.8, textW + chipH);
        ctx.fillStyle = accent;
        roundRectPath(ctx, cx - chipW / 2, chipY - chipH / 2, chipW, chipH, chipH / 2);
        ctx.fill();
        ctx.fillStyle = contrastColor(accent);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), cx, chipY + 1);
        break;
      }
      case "arrow": {
        qrSize = canvasSize * 0.6;
        qrX = canvasSize - PAD - qrSize;
        qrY = (canvasSize - qrSize) / 2;
        fillBg(24 * scale);
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const x1 = canvasSize * 0.08;
        const y1 = canvasSize * 0.82;
        const cpx = canvasSize * 0.12;
        const cpy = canvasSize * 0.55;
        const x2 = qrX - canvasSize * 0.025;
        const y2 = qrY + qrSize * 0.62;
        ctx.strokeStyle = accent;
        ctx.lineWidth = Math.max(4, canvasSize * 0.016);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cpx, cpy, x2, y2);
        ctx.stroke();
        const angle = Math.atan2(y2 - cpy, x2 - cpx);
        const headLen = canvasSize * 0.04;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6));
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6));
        ctx.stroke();
        ctx.save();
        ctx.translate(Math.max(x1, canvasSize * 0.03), y1 + canvasSize * 0.05);
        ctx.rotate(-6 * Math.PI / 180);
        ctx.fillStyle = accent;
        ctx.font = `800 ${Math.round(canvasSize * 0.055)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(caption.toUpperCase(), 0, 0, canvasSize * 0.55);
        ctx.restore();
        break;
      }
      case "ribbon": {
        qrSize = canvasSize * 0.62;
        qrX = canvasSize - PAD - qrSize;
        qrY = canvasSize - PAD - qrSize;
        fillBg(24 * scale);
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        ctx.save();
        ctx.translate(canvasSize * 0.1, canvasSize * 0.1);
        ctx.rotate(-Math.PI / 4);
        const ribbonW = canvasSize * 0.62;
        const ribbonH = canvasSize * 0.12;
        ctx.fillStyle = accent;
        ctx.fillRect(-ribbonW / 2, -ribbonH / 2, ribbonW, ribbonH);
        ctx.fillStyle = "rgba(0,0,0,0.15)";
        ctx.fillRect(-ribbonW / 2, ribbonH / 2 - ribbonH * 0.16, ribbonW, ribbonH * 0.16);
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(ribbonH * 0.4)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), 0, 1, ribbonW * 0.9);
        ctx.restore();
        break;
      }
      case "stamp": {
        qrSize = canvasSize * 0.62;
        qrX = PAD;
        qrY = PAD;
        fillBg(24 * scale);
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const stampR = canvasSize * 0.13;
        const scx = canvasSize * 0.855;
        const scy = canvasSize * 0.855;
        ctx.save();
        ctx.translate(scx, scy);
        ctx.rotate(-12 * Math.PI / 180);
        ctx.strokeStyle = accent;
        ctx.lineWidth = Math.max(3, stampR * 0.09);
        ctx.setLineDash([stampR * 0.18, stampR * 0.13]);
        ctx.beginPath();
        ctx.arc(0, 0, stampR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = accent;
        ctx.font = `800 ${Math.round(stampR * 0.3)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), 0, 0, stampR * 1.6);
        ctx.restore();
        break;
      }
      case "stickyNote": {
        ctx.save();
        ctx.translate(canvasSize / 2, canvasSize / 2);
        ctx.rotate(-3 * Math.PI / 180);
        ctx.translate(-canvasSize / 2, -canvasSize / 2);
        const noteInset = PAD * 0.5;
        ctx.fillStyle = bgOrWhite;
        roundRectPath(ctx, noteInset, noteInset, canvasSize - noteInset * 2, canvasSize - noteInset * 2, 16 * scale);
        ctx.fill();
        const noteBandH = canvasSize * 0.14;
        const noteQrSize = canvasSize - noteInset * 2 - PAD * 1.2 - noteBandH;
        const noteQrX = (canvasSize - noteQrSize) / 2;
        const noteQrY = noteInset + PAD * 0.6;
        ctx.drawImage(qrBitmap, noteQrX, noteQrY, noteQrSize, noteQrSize);
        ctx.fillStyle = accent;
        ctx.font = `800 ${Math.round(noteBandH * 0.42)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          caption.toUpperCase(),
          canvasSize / 2,
          noteQrY + noteQrSize + noteBandH / 2,
          canvasSize - noteInset * 2 - PAD
        );
        const tapeW = canvasSize * 0.16;
        const tapeH = canvasSize * 0.05;
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.save();
        ctx.translate(canvasSize * 0.24, noteInset + tapeH * 0.1);
        ctx.rotate(-10 * Math.PI / 180);
        ctx.fillRect(-tapeW / 2, -tapeH / 2, tapeW, tapeH);
        ctx.restore();
        ctx.save();
        ctx.translate(canvasSize * 0.76, noteInset + tapeH * 0.1);
        ctx.rotate(8 * Math.PI / 180);
        ctx.fillRect(-tapeW / 2, -tapeH / 2, tapeW, tapeH);
        ctx.restore();
        ctx.restore();
        break;
      }
      case "burst": {
        const cx = canvasSize / 2;
        const cy = canvasSize / 2;
        const outerR = canvasSize * 0.5;
        const innerR = canvasSize * 0.38;
        const spikes = 14;
        ctx.fillStyle = accent;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? outerR : innerR;
          const a = (Math.PI / spikes) * i - Math.PI / 2;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        const cardR = innerR * 0.94;
        ctx.fillStyle = bgOrWhite;
        roundRectPath(ctx, cx - cardR, cy - cardR, cardR * 2, cardR * 2, cardR * 0.22);
        ctx.fill();
        qrSize = cardR * 1.6;
        qrX = cx - qrSize / 2;
        qrY = cy - qrSize / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const chipH = canvasSize * 0.09;
        const chipY = cy + cardR - chipH * 0.1;
        ctx.font = `800 ${Math.round(chipH * 0.5)}px -apple-system, "Segoe UI", sans-serif`;
        const textW = ctx.measureText(caption.toUpperCase()).width;
        const chipW = Math.min(cardR * 1.9, textW + chipH);
        ctx.fillStyle = accent;
        roundRectPath(ctx, cx - chipW / 2, chipY - chipH / 2, chipW, chipH, chipH / 2);
        ctx.fill();
        ctx.fillStyle = contrastColor(accent);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), cx, chipY + 1);
        break;
      }
      case "bracketsBadge": {
        const chipH = canvasSize * 0.1;
        qrSize = canvasSize - PAD * 2 - chipH * 0.75;
        qrX = (canvasSize - qrSize) / 2;
        qrY = PAD;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const off = canvasSize * 0.015;
        const len = canvasSize * 0.1;
        const width = Math.max(2.5, canvasSize * 0.011);
        drawCornerBrackets(ctx, qrX - off, qrY - off, qrSize + off * 2, len, width, accent, {
          cap: "round",
          join: "round",
        });
        const chipY = qrY + qrSize + off + (canvasSize - (qrY + qrSize + off) - chipH) / 2 + chipH / 2;
        ctx.font = `800 ${Math.round(chipH * 0.4)}px -apple-system, "Segoe UI", sans-serif`;
        const textW = ctx.measureText(caption.toUpperCase()).width;
        const chipW = Math.min(canvasSize * 0.72, textW + chipH);
        ctx.fillStyle = accent;
        roundRectPath(ctx, canvasSize / 2 - chipW / 2, chipY - chipH / 2, chipW, chipH, chipH / 2);
        ctx.fill();
        ctx.fillStyle = contrastColor(accent);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), canvasSize / 2, chipY + 1);
        break;
      }
      case "tag": {
        const tagW = canvasSize * 0.44;
        const tagH = canvasSize * 0.16;
        qrY = tagH * 1.08;
        qrSize = canvasSize - qrY - PAD;
        qrX = (canvasSize - qrSize) / 2;
        fillBg(24 * scale);
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const tagX = (canvasSize - tagW) / 2;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.moveTo(tagX, 0);
        ctx.lineTo(tagX + tagW, 0);
        ctx.lineTo(tagX + tagW, tagH * 0.7);
        ctx.lineTo(tagX + tagW / 2, tagH);
        ctx.lineTo(tagX, tagH * 0.7);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(tagH * 0.28)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), tagX + tagW / 2, tagH * 0.38, tagW * 0.82);
        break;
      }
      case "tab": {
        fillBg(20 * scale);
        const tabH = canvasSize * 0.16;
        const tabW = canvasSize * 0.56;
        const gap = canvasSize * 0.02;
        qrY = PAD;
        qrSize = canvasSize - tabH - gap - PAD;
        qrX = (canvasSize - qrSize) / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const tabX = (canvasSize - tabW) / 2;
        const tabY = canvasSize - tabH;
        ctx.fillStyle = accent;
        ctx.fillRect(tabX, tabY, tabW, tabH);
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(tabH * 0.36)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), canvasSize / 2, tabY + tabH / 2 + 1, tabW * 0.85);
        break;
      }
      case "vertical": {
        const barW = canvasSize * 0.15;
        fillBg(20 * scale);
        qrX = barW;
        qrY = PAD;
        qrSize = canvasSize - barW - PAD * 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        ctx.fillStyle = accent;
        ctx.fillRect(0, 0, barW, canvasSize);
        const letters = caption.toUpperCase().replace(/[^A-ZÄÖÜ0-9]/g, "").split("");
        const step = barW * 0.55;
        const maxLetters = Math.max(1, Math.floor((canvasSize * 0.92) / step));
        const shown = letters.slice(0, maxLetters);
        const totalH = shown.length * step;
        const startY = (canvasSize - totalH) / 2 + step / 2;
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(barW * 0.42)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        shown.forEach((ch, i) => ctx.fillText(ch, barW / 2, startY + i * step));
        break;
      }
      case "cornerIcon": {
        fillBg(22 * scale);
        const badgeH = canvasSize * 0.13;
        const bottomReserve = badgeH + canvasSize * 0.05;
        qrY = PAD;
        qrSize = canvasSize - PAD - bottomReserve;
        qrX = (canvasSize - qrSize) / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        const badgeW = canvasSize * 0.4;
        const badgeX = PAD * 0.7;
        const badgeY = canvasSize - PAD * 0.5 - badgeH;
        ctx.fillStyle = accent;
        roundRectPath(ctx, badgeX, badgeY, badgeW, badgeH, badgeH * 0.25);
        ctx.fill();
        const iconSize = badgeH * 0.5;
        const iconX = badgeX + badgeH * 0.3;
        const iconY = badgeY + badgeH / 2 - iconSize / 2;
        const cl = iconSize * 0.42;
        drawCornerBrackets(ctx, iconX, iconY, iconSize, cl, Math.max(1.5, iconSize * 0.12), contrastColor(accent), {
          cap: "round",
          join: "round",
        });
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(badgeH * 0.3)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(
          caption.toUpperCase(),
          iconX + iconSize + badgeH * 0.24,
          badgeY + badgeH / 2 + 1,
          badgeW - (iconX - badgeX) - iconSize - badgeH * 0.35
        );
        break;
      }
      case "house": {
        const roofH = canvasSize * 0.22;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.moveTo(canvasSize * 0.5, 0);
        ctx.lineTo(canvasSize * 0.96, roofH);
        ctx.lineTo(canvasSize * 0.04, roofH);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = bgOrWhite;
        ctx.fillRect(canvasSize * 0.08, roofH, canvasSize * 0.84, canvasSize - roofH - PAD * 0.5);
        ctx.fillStyle = contrastColor(accent);
        ctx.font = `800 ${Math.round(roofH * 0.3)}px -apple-system, "Segoe UI", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(caption.toUpperCase(), canvasSize * 0.5, roofH * 0.6, canvasSize * 0.7);
        const wallH = canvasSize - roofH - PAD * 0.5;
        qrSize = Math.min(canvasSize * 0.84 - canvasSize * 0.12, wallH - canvasSize * 0.12);
        qrX = (canvasSize - qrSize) / 2;
        qrY = roofH + (wallH - qrSize) / 2;
        ctx.drawImage(qrBitmap, qrX, qrY, qrSize, qrSize);
        break;
      }
      default: {
        ctx.drawImage(qrBitmap, 0, 0, canvasSize, canvasSize);
      }
    }

    return canvas;
  }

  async function render() {
    const myToken = ++renderToken;
    const state = collectState();
    const frame = getFrame(state.frameStyle);

    if (frame.id === "none") {
      const options = buildOptionsFromState(state, 300);
      options.type = "svg";
      if (myToken !== renderToken) return;
      if (qrPreviewMode !== "svg") {
        els.qrCanvas.innerHTML = "";
        qrCode = new QRCodeStyling(options);
        qrCode.append(els.qrCanvas);
        qrPreviewMode = "svg";
      } else {
        qrCode.update(options);
      }
      updateScanHint(options, state);
      return;
    }

    try {
      const previewSize = 320;
      const bitmap = await rasterizeQr(state, previewSize);
      if (myToken !== renderToken) return;
      const framed = drawFramedQr(previewSize, frame, state, bitmap);
      els.qrCanvas.innerHTML = "";
      els.qrCanvas.appendChild(framed);
      qrPreviewMode = "canvas";
      qrCode = null;
      const rawOptions = buildOptionsFromState(state, previewSize);
      updateScanHint(rawOptions, state);
    } catch (e) {
      // Vorschau-Fehler sollen die App nicht blockieren
    }
  }

  function updateScanHint(options, state) {
    const hasLogo = !!logoDataUrl;
    const logoSizeRatio = Number(els.logoSize.value) / 100;
    if (hasLogo && options.qrOptions.errorCorrectionLevel !== "H" && logoSizeRatio > 0.22) {
      els.scanHint.textContent = "Großes Logo bei niedriger Fehlerkorrektur — für sichere Lesbarkeit „Sehr hoch“ wählen oder Logo verkleinern.";
      els.scanHint.classList.add("warn");
    } else if (!options.data.trim()) {
      els.scanHint.textContent = {
        wifi: "Gib mindestens einen Netzwerknamen (SSID) ein, um den Code zu erzeugen.",
        vcard: "Gib mindestens Vor- oder Nachname ein, um den Code zu erzeugen.",
        mailto: "Gib eine Empfänger-Adresse ein, um den Code zu erzeugen.",
        event: "Gib Titel und Beginn ein, um den Code zu erzeugen.",
        payment: "Gib einen Benutzernamen oder Link ein, um den Code zu erzeugen.",
        social: "Gib einen Benutzernamen oder Link ein, um den Code zu erzeugen.",
      }[state.activeType] || "Gib einen Text oder Link ein, um den Code zu erzeugen.";
      els.scanHint.classList.remove("warn");
    } else {
      els.scanHint.textContent = hasLogo
        ? "Fehlerkorrektur „Sehr hoch“ aktiv — der Code bleibt trotz Logo zuverlässig scannbar."
        : "";
      els.scanHint.classList.remove("warn");
    }
  }

  function applyPreset(preset) {
    els.gradientType.value = preset.type;
    els.colorA.value = preset.a;
    els.colorB.value = preset.b;
    els.bgColor.value = preset.bg;
    els.transparentBg.checked = false;
    syncColorLabels();
    syncColorModeUI();
    render();
  }

  function syncColorLabels() {
    els.colorAValue.textContent = els.colorA.value.toUpperCase();
    els.colorBValue.textContent = els.colorB.value.toUpperCase();
    els.bgColorValue.textContent = els.bgColor.value.toUpperCase();
  }

  function syncColorModeUI() {
    const isSolid = els.gradientType.value === "solid";
    els.colorModeToggle.checked = !isSolid;
    if (!isSolid) els.gradientShape.value = els.gradientType.value;
    els.gradientShapeGroup.hidden = isSolid;
    els.colorBGroup.style.display = isSolid ? "none" : "";
  }

  function updateFrameFieldVisibility() {
    const frame = getFrame(els.frameStyle.value);
    const needsCaption = CAPTION_KINDS.has(frame.kind);
    els.frameTextGroup.hidden = !needsCaption;
    els.frameText.placeholder = defaultCaptionFor({ activeType });
    els.frameSvgNote.hidden = frame.id === "none";
    els.downloadSvg.disabled = frame.id !== "none";
    els.downloadSvg.title = frame.id !== "none" ? "SVG-Export ist bei aktivem Rahmen deaktiviert — bitte PNG verwenden." : "";
  }

  function buildPresetRow() {
    PRESETS.forEach((preset, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "preset-swatch";
      btn.title = preset.name;
      const grad = preset.type === "solid" ? preset.a : `linear-gradient(135deg, ${preset.a}, ${preset.b})`;
      btn.style.background = grad;
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", () => {
        [...els.presetRow.children].forEach((c) => c.classList.remove("active"));
        btn.classList.add("active");
        applyPreset(preset);
      });
      els.presetRow.appendChild(btn);
    });
  }

  function handleLogoFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      logoDataUrl = reader.result;
      els.logoPreviewImg.src = logoDataUrl;
      els.logoPreviewImg.hidden = false;
      els.logoDropText.textContent = file.name;
      els.logoRemoveBtn.hidden = false;
      els.logoOptionsRow.hidden = false;
      render();
    };
    reader.readAsDataURL(file);
  }

  function removeLogo() {
    logoDataUrl = null;
    els.logoInput.value = "";
    els.logoPreviewImg.src = "";
    els.logoPreviewImg.hidden = true;
    els.logoDropText.textContent = "Bild auswählen …";
    els.logoRemoveBtn.hidden = true;
    els.logoOptionsRow.hidden = true;
    render();
  }

  // --- Verlauf: die vollständige Konfiguration (nicht nur ein Bild) wird lokal in
  // IndexedDB gespeichert, damit gespeicherte Codes später sowohl als PNG als auch
  // als SVG heruntergeladen als auch farblich/inhaltlich weiterbearbeitet werden können.
  const HISTORY_DB_NAME = "qrism-history-db";
  const HISTORY_STORE = "codes";
  let historyDbPromise = null;
  let historyObjectUrls = [];

  function openHistoryDb() {
    if (!historyDbPromise) {
      historyDbPromise = new Promise((resolve, reject) => {
        const req = indexedDB.open(HISTORY_DB_NAME, 2);
        req.onupgradeneeded = () => {
          if (!req.result.objectStoreNames.contains(HISTORY_STORE)) {
            req.result.createObjectStore(HISTORY_STORE, { keyPath: "id" });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    return historyDbPromise;
  }

  async function saveHistoryEntry(entry) {
    const db = await openHistoryDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readwrite");
      tx.objectStore(HISTORY_STORE).put(entry);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getAllHistoryEntries() {
    const db = await openHistoryDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readonly");
      const req = tx.objectStore(HISTORY_STORE).getAll();
      req.onsuccess = () => resolve(req.result.filter((e) => e.fields).sort((a, b) => b.createdAt - a.createdAt));
      req.onerror = () => reject(req.error);
    });
  }

  async function deleteHistoryEntry(id) {
    const db = await openHistoryDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readwrite");
      tx.objectStore(HISTORY_STORE).delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function clearHistoryEntries() {
    const db = await openHistoryDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HISTORY_STORE, "readwrite");
      tx.objectStore(HISTORY_STORE).clear();
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  const TYPE_LABELS = {
    text: "Text/Link",
    wifi: "WLAN",
    vcard: "Kontakt",
    mailto: "E-Mail",
    event: "Termin",
    payment: "Zahlung",
    social: "Social",
  };

  function buildAutoLabel(state) {
    switch (state.activeType) {
      case "text":
        return state.content.trim().slice(0, 60) || "Text/Link";
      case "wifi":
        return `WLAN: ${state.wifiSsid.trim() || "—"}`;
      case "vcard":
        return `Kontakt: ${[state.vcFirst.trim(), state.vcLast.trim()].filter(Boolean).join(" ") || "—"}`;
      case "mailto":
        return `E-Mail: ${state.mailTo.trim() || "—"}`;
      case "event":
        return `Termin: ${state.evTitle.trim() || "—"}`;
      case "payment":
        return `Zahlung: ${state.paymentHandle.trim() || "—"}`;
      case "social":
        return `Social: ${state.socialHandle.trim() || "—"}`;
      default:
        return "QR-Code";
    }
  }

  function formatHistoryDate(ts) {
    return new Date(ts).toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function downloadStateAs(state, extension) {
    const size = Number(state.exportSize) || 1024;
    const frame = getFrame(state.frameStyle);
    const filename = slugifyFilename(state.qrName);

    if (frame.id === "none" || extension === "svg") {
      const options = buildOptionsFromState(state, size);
      options.type = "svg";
      const exportCode = new QRCodeStyling(options);
      exportCode.download({ name: filename, extension });
      return;
    }

    const bitmap = await rasterizeQr(state, size);
    const framed = drawFramedQr(size, frame, state, bitmap);
    const blob = await new Promise((resolve) => framed.toBlob(resolve, "image/png"));
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  async function renderHistoryThumb(state) {
    const frame = getFrame(state.frameStyle);
    const size = 120;
    const bitmap = await rasterizeQr(state, size);
    if (frame.id === "none") {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      canvas.getContext("2d").drawImage(bitmap, 0, 0, size, size);
      return canvas;
    }
    return drawFramedQr(size, frame, state, bitmap);
  }

  async function renderHistoryList() {
    let entries = [];
    try {
      entries = await getAllHistoryEntries();
    } catch (e) {
      // IndexedDB nicht verfügbar (z. B. privater Modus) — Verlauf bleibt leer
    }

    historyObjectUrls.forEach((url) => URL.revokeObjectURL(url));
    historyObjectUrls = [];
    els.historyList.querySelectorAll(".history-item").forEach((n) => n.remove());
    els.historyEmpty.hidden = entries.length > 0;
    els.historyClearBtn.hidden = entries.length === 0;

    entries.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "history-item";

      const thumbWrap = document.createElement("div");
      thumbWrap.className = "history-thumb-wrap";
      renderHistoryThumb(entry.fields).then((canvas) => {
        thumbWrap.innerHTML = "";
        thumbWrap.appendChild(canvas);
      });

      const info = document.createElement("div");
      info.className = "history-info";
      const label = document.createElement("div");
      label.className = "history-label";
      label.textContent = entry.name;
      const meta = document.createElement("div");
      meta.className = "history-meta";
      meta.textContent = `${TYPE_LABELS[entry.fields.activeType] || "QR-Code"} · ${formatHistoryDate(entry.createdAt)}`;
      info.appendChild(label);
      info.appendChild(meta);

      const actions = document.createElement("div");
      actions.className = "history-actions";

      const pngBtn = document.createElement("button");
      pngBtn.type = "button";
      pngBtn.className = "btn-ghost small";
      pngBtn.textContent = "PNG";
      pngBtn.addEventListener("click", () => downloadStateAs(entry.fields, "png"));

      const entryFrame = getFrame(entry.fields.frameStyle);
      const svgBtn = document.createElement("button");
      svgBtn.type = "button";
      svgBtn.className = "btn-ghost small";
      svgBtn.textContent = "SVG";
      svgBtn.disabled = entryFrame.id !== "none";
      svgBtn.title = svgBtn.disabled ? "SVG-Export ist bei aktivem Rahmen deaktiviert — bitte PNG verwenden." : "";
      svgBtn.addEventListener("click", () => {
        if (svgBtn.disabled) return;
        downloadStateAs(entry.fields, "svg");
      });

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "btn-ghost small";
      editBtn.textContent = "Bearbeiten";
      editBtn.addEventListener("click", () => {
        applyState(entry.fields);
        closeHistoryModal();
      });

      const del = document.createElement("button");
      del.type = "button";
      del.className = "btn-ghost small";
      del.textContent = "Löschen";
      del.addEventListener("click", async () => {
        await deleteHistoryEntry(entry.id);
        renderHistoryList();
      });

      actions.appendChild(pngBtn);
      actions.appendChild(svgBtn);
      actions.appendChild(editBtn);
      actions.appendChild(del);

      item.appendChild(thumbWrap);
      item.appendChild(info);
      item.appendChild(actions);
      els.historyList.appendChild(item);
    });
  }

  function openHistoryModal() {
    els.historyBackdrop.hidden = false;
    renderHistoryList();
  }

  function closeHistoryModal() {
    els.historyBackdrop.hidden = true;
  }

  async function saveCurrentToHistory() {
    const state = collectState();
    const name = state.qrName.trim() || buildAutoLabel(state);
    await saveHistoryEntry({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: Date.now(),
      name,
      fields: state,
    });
    if (!els.historyBackdrop.hidden) renderHistoryList();
  }

  function flashSaved(button, text) {
    const original = button.textContent;
    button.textContent = text;
    button.classList.add("saved");
    button.disabled = true;
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove("saved");
      button.disabled = false;
    }, 1500);
  }

  async function download(extension) {
    const state = collectState();
    await downloadStateAs(state, extension);
  }

  const TYPE_PANELS = {
    text: "panelText",
    wifi: "panelWifi",
    vcard: "panelVcard",
    mailto: "panelMailto",
    event: "panelEvent",
    payment: "panelPayment",
    social: "panelSocial",
  };

  function switchType(type) {
    activeType = type;
    Object.entries(TYPE_PANELS).forEach(([t, key]) => {
      els[key].hidden = t !== type;
    });
    [...els.typeTabs.children].forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.type === type)
    );
    updateFrameFieldVisibility();
    render();
  }

  function toggleWifiPasswordVisibility() {
    els.wifiPasswordGroup.style.display = els.wifiEncryption.value === "nopass" ? "none" : "";
  }

  function togglePaymentFields() {
    const service = els.paymentService.value;
    els.paymentHandleLabel.firstChild.textContent = service === "custom" ? "Link" : "Benutzername";
    els.paymentHandle.placeholder = service === "custom" ? "https://…" : "deinname";
    els.paymentAmountGroup.hidden = service !== "paypal";
  }

  function updateSocialPlaceholder() {
    const platform = els.socialPlatform.value;
    const needsFullLink = platform === "spotify" || platform === "custom";
    els.socialHandle.placeholder = needsFullLink ? "https://…" : "deinname";
    els.socialHandleLabel.firstChild.textContent = needsFullLink ? "Link" : "Benutzername";
  }

  function wireEvents() {
    els.qrName.addEventListener("input", () => {});

    els.content.addEventListener("input", render);

    [...els.typeTabs.children].forEach((btn) =>
      btn.addEventListener("click", () => switchType(btn.dataset.type))
    );

    [els.wifiSsid, els.wifiPassword].forEach((el) => el.addEventListener("input", render));
    els.wifiEncryption.addEventListener("change", () => {
      toggleWifiPasswordVisibility();
      render();
    });
    els.wifiHidden.addEventListener("change", render);

    [els.vcFirst, els.vcLast, els.vcOrg, els.vcTitle, els.vcPhone, els.vcEmail, els.vcUrl, els.vcSocial, els.vcAddress].forEach(
      (el) => el.addEventListener("input", render)
    );

    [els.mailTo, els.mailSubject, els.mailBody].forEach((el) => el.addEventListener("input", render));

    [els.evTitle, els.evLocation, els.evStart, els.evEnd, els.evDescription].forEach((el) =>
      el.addEventListener("input", render)
    );

    els.paymentService.addEventListener("change", () => {
      togglePaymentFields();
      render();
    });
    [els.paymentHandle, els.paymentAmount].forEach((el) => el.addEventListener("input", render));

    els.socialPlatform.addEventListener("change", () => {
      updateSocialPlaceholder();
      render();
    });
    els.socialHandle.addEventListener("input", render);

    [els.dotType, els.cornerSquareType, els.cornerDotType].forEach((el) =>
      el.addEventListener("change", render)
    );

    els.colorModeToggle.addEventListener("change", () => {
      els.gradientType.value = els.colorModeToggle.checked ? els.gradientShape.value : "solid";
      syncColorModeUI();
      render();
    });

    els.gradientShape.addEventListener("change", () => {
      if (!els.colorModeToggle.checked) return;
      els.gradientType.value = els.gradientShape.value;
      render();
    });

    [els.colorA, els.colorB, els.bgColor].forEach((el) =>
      el.addEventListener("input", () => {
        syncColorLabels();
        render();
      })
    );

    els.transparentBg.addEventListener("change", render);

    els.frameStyle.addEventListener("change", () => {
      updateFrameFieldVisibility();
      render();
    });
    els.frameText.addEventListener("input", render);

    els.hideDots.addEventListener("change", render);
    els.ecLevel.addEventListener("change", render);

    els.logoSize.addEventListener("input", () => {
      els.logoSizeValue.textContent = `${els.logoSize.value}%`;
      render();
    });

    els.logoInput.addEventListener("change", (e) => handleLogoFile(e.target.files[0]));
    els.logoRemoveBtn.addEventListener("click", removeLogo);

    els.logoDrop.addEventListener("dragover", (e) => {
      e.preventDefault();
      els.logoDrop.style.borderColor = "var(--violet)";
    });
    els.logoDrop.addEventListener("dragleave", () => {
      els.logoDrop.style.borderColor = "";
    });
    els.logoDrop.addEventListener("drop", (e) => {
      e.preventDefault();
      els.logoDrop.style.borderColor = "";
      const file = e.dataTransfer.files[0];
      if (file) handleLogoFile(file);
    });

    els.downloadPng.addEventListener("click", () => download("png"));
    els.downloadSvg.addEventListener("click", () => {
      if (els.downloadSvg.disabled) return;
      download("svg");
    });
    els.saveBtn.addEventListener("click", async () => {
      await saveCurrentToHistory();
      flashSaved(els.saveBtn, "Gespeichert ✓");
    });

    els.historyBtn.addEventListener("click", openHistoryModal);
    els.historyCloseBtn.addEventListener("click", closeHistoryModal);
    els.historyBackdrop.addEventListener("click", (e) => {
      if (e.target === els.historyBackdrop) closeHistoryModal();
    });
    els.historyClearBtn.addEventListener("click", async () => {
      await clearHistoryEntries();
      renderHistoryList();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !els.historyBackdrop.hidden) closeHistoryModal();
    });
  }

  function init() {
    buildPresetRow();
    syncColorLabels();
    syncColorModeUI();
    toggleWifiPasswordVisibility();
    togglePaymentFields();
    updateSocialPlaceholder();
    updateFrameFieldVisibility();
    wireEvents();
    render();
  }

  init();
})();
