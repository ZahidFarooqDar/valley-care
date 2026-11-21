/* =========================================================
   All clinic content lives here. Images live in:
   src/assets/valley-care
   ========================================================= */
export const IMG_BASE = '/assets/valley-care/';
export const IMG_VERSION = '1'; // change if the browser keeps showing an old image
export const LOGO_LOCAL = IMG_BASE + 'logo.jpg';
export const LOGO_REMOTE =
  'https://instagram.fsj1-1.fna.fbcdn.net/v/t51.82787-19/649239295_18087264362335238_4400614249858545302_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=GP_asiYGjEZnRUJAAJY2V0RYHxI9bmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDI0LkMzIn0%3D&_nc_ohc=HePTD-mwyn0Q7kNvwHPA6gj&_nc_oc=AdpAr-XYjPt1BZ1P9tl1phJJyI6vVecfmTYw8hv4iBVV5WWtUdDZWgACIZoqkiBNP6jhn29Wh4hcDAGHHry76WQb&_nc_zt=24&_nc_ht=instagram.fsj1-1.fna&_nc_gid=BB8Ncn18-jquQrKFxRt9OQ&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQQ3Klyf5Rs_V_GI3J9DNZ7uDrHs46MJtWuz-A5mJb4iSw&oe=6B05F9F5';

export const IG_DM = 'https://ig.me/m/valleycarecentre_';
export const IG_PAGE = 'https://www.instagram.com/valleycarecentre_/';
export const EMAIL = 'valleycarecentre@gmail.com';

export interface Treatment { icon: string; name: string; desc: string; }
export interface Practitioner { name: string; initial: string; role: string; desc: string; photo: string; }

export const TREATMENTS: Treatment[] = [
  { icon: '🦴', name: 'Chiropractic Care', desc: 'Hands-on bone and spine alignment for back, neck and joint concerns.' },
  { icon: '🫧', name: 'Hijama (Cupping Therapy)', desc: 'Traditional wet cupping, performed by our hijama practitioner.' },
  { icon: '🔥', name: 'Fire Therapy', desc: 'Traditional fire therapy sessions.' },
  { icon: '📌', name: 'Acupuncture / Dry Needling', desc: 'Fine-needle techniques for muscle tension and pain points.' },
  { icon: '👐', name: 'Acupressure', desc: 'Pressure-point therapy using skilled hand technique.' },
  { icon: '🦶', name: 'Reflexology', desc: 'Foot and hand pressure-point therapy for relaxation.' },
  { icon: '💆', name: 'Deep Tissue Massage', desc: 'Firm, focused massage for tight and tired muscles.' },
  { icon: '🏃', name: 'Sports Injury Treatment', desc: 'Care for sports injuries and shoulder injuries.' },
  { icon: '🎯', name: 'Navel Displacement', desc: 'Assessment and care for navel displacement concerns.' },
  { icon: '✨', name: 'Tattoo Removal', desc: 'Tattoo removal treatment. Ask us about your case.' }
];

export const PRACTITIONERS: Practitioner[] = [
  {
    name: 'Dr. Basit',
    initial: 'B',
    role: 'Chiropractic',
    desc: 'Chiropractic bone and spine alignment, and sports and shoulder injury care.',
    photo: 'basit'
  }
];

export const HOURS: Record<string, [string, string][]> = {
  'Chiropractic': [['Monday – Saturday', '9:00 AM – 6:30 PM'], ['Sunday', '9:00 AM – 2:00 PM']],
  'Hijama': [['Monday – Wednesday', '9:30 AM – 6:30 PM'], ['Thursday – Saturday', '9:00 AM – 6:30 PM'], ['Sunday', '9:30 AM – 1:30 PM']]
};

/** Instagram reel shortcodes, grouped by tab. */
export const VIDEOS: Record<string, string[]> = {
  'Treatments': ['Df7V-IpTxCm', 'Df2IJhezenN', 'Dfw8F7nzve0', 'DfmzMGATluu'],
  'Patient Reviews': ['Dd9MdczT7kg'],
  'Offers': ['Dd6l9OezVls'],
  'Find Us': ['DY4uulSTNR-']
};

export const HERO_PHOTOS = ['gallery-1.png', 'gallery-2.png', 'gallery-3.png'];

/** "Inside the clinic": each tile lists files to try in order. */
export const GALLERY: string[][] = [
  ['inside1.png', 'gallery-1.jpg'],
  ['inside2.png', 'gallery-2.png'],
  ['inside3.jpg', 'gallery-3.jpg']
];

export const MARQUEE = ['Chiropractic Care', 'Hijama', 'Acupuncture', 'Dry Needling', 'Reflexology', 'Deep Tissue Massage', 'Sports Injury', 'Tattoo Removal'];
