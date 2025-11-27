
# mantra studio — Brand & Web Design Document  
*A Complete Design & Integration Guide (English for Developer, Hebrew content for clients)*

---

## 1. Brand Vision & Aesthetic Direction  
**mantra studio** is a boutique yoga and pilates space located in **Petah Tikva**, Israel.  
The studio’s visual identity is calm, soft, minimalist, and elegant — inspired by natural light, neutral tones, and slow intentional movement.

The website must reflect:
- A premium, boutique atmosphere  
- Clean and minimal aesthetics  
- Soft neutral colors & warm light  
- Typography that feels spiritual, modern, and balanced  
- Smooth interactions that match the calm rhythm of yoga  

---

## 2. Color Palette (based on provided Instagram aesthetic)

### **Primary Neutrals**
- **Cream / Off‑White** — `#F3EFEA`
- **Soft Sand** — `#E7E1DA`
- **Warm Greige** — `#D7D0C7`

### **Text Colors**
- **Warm Charcoal** — `#3A3A3A`
- **Deep Taupe** — `#5E5752`

### **Accent Colors**
- **Muted Clay (Soft Pink‑Beige)** — `#CDAFA8`
- **Natural Wood** — `#C8A889`

These colors should be used for:
- Backgrounds (light tones)
- Text (charcoal/taupe)
- Subtle highlights (clay/wood)

The palette must always feel *soft, quiet, and natural* — avoiding contrasts that are too strong.

---

## 3. Typography

### **Headings (H1–H3)**  
**The Seasons** — elegant serif, spiritual and refined.  
Use for titles, quotes, section headers.

### **Body Text**
**Inter** (fallback: Helvetica Now / Satoshi)  
Clean, readable, minimal. Perfect for longer content and UI elements.

### ***Typography Style Notes***
- Large, airy headings  
- Wide spacing  
- Plenty of white space  
- Short paragraphs  
- Understated elegance  

---

## 4. Visual Language & Mood  
The site should visually express:

- Soft neutral photography  
- Black & white or beige-toned imagery  
- Minimal compositions  
- Natural materials (curtains, wood floors, daylight)  
- Slow-motion transitions  
- Breathing room (padding & spacing)  
- Light shadows and delicate textures  

---

## 5. Website Structure (intended for Israeli customers, Hebrew text)

### **Homepage**
1. **Hero Section**  
   - Large, soft photograph from the studio  
   - Minimal title (The Seasons font)  
   - CTA → שיעור ניסיון ראשון / Join First Class (Arbox)  

2. **Philosophy Block**  
   Short Hebrew text, e.g.:  
   *"להשאיר את הרעש בחוץ. לנשום. לנוע. להיות נוכחת."*

3. **Interactive Image Carousel**  
   Smooth drag/swipe, slow transitions.  
   Show the studio, instructors, moments of movement.

4. **About Section**  
   Minimal content explaining the studio values.

5. **Weekly Schedule (Arbox)**  
   Integrated cleanly with custom styling.  
   - Days  
   - Hours  
   - Class type  
   - Instructor  
   - “להירשם לשיעור” (Book via Arbox)

6. **Lead Form (Arbox integration)**  
   - Name  
   - Phone  
   - Email  
   - Automatic CRM entry  
   Styled as a soft, clean custom UI.

7. **Footer**  
   Minimalist typography + contact information.

---

## 6. Arbox Integration (Technical Instructions for Developer)

### **Lead Generation**
Use Arbox Lead API to capture:
- Full name  
- Phone number  
- Email  
- Lead source: “Website”

The form should be fully custom-designed, but POST to Arbox.

### **Class Schedule Display**
Two options:

#### **Option A: Arbox Embedded Widget (simple)**  
Use iframe but restyle outer container.

#### **Option B: Arbox API (recommended)**  
Developer pulls:
- Class list  
- Times  
- Instructors  
- Availability  
- A “book now” link per class  

Displayed in a fully custom UI matching the brand colors.

### **Membership / Trial Signup**
CTA buttons link directly to:
- Arbox signup page  
- Arbox payment pages  

Buttons styled in warm charcoal or clay.

---

## 7. Required Interactive Design Elements
Three advanced UI/UX interactions must be included:

---

### **1. 3D Scroll / Parallax Movement**
Used in the hero or mid‑page section.
- Layers move at different speeds  
- Creates depth  
- Very slow + smooth  
- No harsh motion  

---

### **2. Reading Progress Bar**
A thin bar at the top of the screen.  
Color: `#CDAFA8` (Muted Clay) or `#3A3A3A` (Warm Charcoal)

---

### **3. Interactive Image Carousel**
- Swipe/drag interactions  
- Soft momentum physics  
- Minimal arrows/dots  
- Neutral background  

---

## 8. Tone of Voice (Hebrew, for Israeli audience)
- Calm  
- Warm  
- Empathetic  
- Softly spiritual  
- Never salesy  
- Short sentences  
- Focus on presence and connection  

Examples:  
- “התרגול יעשה את הקסם.”  
- “שאיפה. נשיפה. התחלה חדשה.”  
- “רגע להיות כאן.”

---

## 9. Page List (Site Map)

- **Home**  
- **Class Schedule** (Arbox)  
- **About**  
- **Classes** (Yoga / Pilates / Workshops)  
- **Trial Signup** (Arbox)  
- **Contact**  
- **Studio Gallery**  

All pages maintain the same aesthetic principles.

---

## 10. Technical Expectations for Developer
- Fully responsive  
- Smooth GSAP/Framer Motion animations  
- Lightweight, minimal bundle  
- Integration with Arbox APIs  
- Accessibility-friendly  
- Hebrew RTL support  
- Clean code architecture  

---

## 11. Client Details (for Israeli users)
**mantra studio**  
סטודיו יוגה | פילאטיס | אימוני עיצוב  
פתח תקווה, רח׳ אבא אחימאיר 22  
טלפון: 055-980-8109  
Instagram: @mantra_motion__studio  

---

## End of Document
Prepared for: Yedidya  
For development by: US‑based developer (English-ready)
