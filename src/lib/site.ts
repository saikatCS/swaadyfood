import logo from "@/assets/logo.png";
import splash from "@/assets/screen1.png";
import login from "@/assets/screen2.png";
import signup from "@/assets/screen3.png";
import favorites from "@/assets/screen4.png";
import ordersActive from "@/assets/screen5.png";
import tracking from "@/assets/screen6.png";
import deliveryTime from "@/assets/screen7.png";
import ordersCompleted from "@/assets/screen8.png";
import menu from "@/assets/screen9.png";

export const LOGO_URL = logo;

export const BRAND = {
  name: "SWAADY",
  tagline: "Deliciousness at your doorstep, faster than ever.",
  phone: "9366134837",
  phoneIntl: "+919366134837",
  email: "swaady26.food@gmail.com",
  location: "Ambassa, Dhalai District, Tripura, India",
  restaurant: "Joy Guru Hotel and Restaurant",
};

export type Screen = { url: string; label: string; alt: string };

export const SCREENS: Screen[] = [
  {
    url: splash,
    label: "Welcome",
    alt: "Swaady app welcome screen with log in and sign up buttons",
  },
  {
    url: login,
    label: "Secure Log In",
    alt: "Swaady app log in screen with mobile number and OTP verification",
  },
  {
    url: signup,
    label: "Create Account",
    alt: "Swaady app new account screen with name, email and mobile number fields",
  },
  {
    url: favorites,
    label: "Favourites",
    alt: "Swaady app favourites screen showing saved dishes",
  },
  {
    url: ordersActive,
    label: "Active Orders",
    alt: "Swaady app active orders screen with cancel order and track driver actions",
  },
  {
    url: tracking,
    label: "Live Tracking",
    alt: "Swaady app live tracking screen showing the delivery rider on a map",
  },
  {
    url: deliveryTime,
    label: "Delivery Time",
    alt: "Swaady app delivery time screen with shipping address and estimated delivery",
  },
  {
    url: ordersCompleted,
    label: "Order History",
    alt: "Swaady app completed orders screen with reorder options",
  },
  {
    url: menu,
    label: "Your Account",
    alt: "Swaady app account menu with orders, profile, addresses and support",
  },
];

export const FAQS = [
  {
    q: "Which areas does Swaady currently deliver to?",
    a: "Swaady delivers across Ambassa in Dhalai District, Tripura. Service is currently available only in this area while we expand carefully, one neighbourhood at a time.",
  },
  {
    q: "Which restaurant can I order from?",
    a: `Every order on Swaady is prepared by ${BRAND.restaurant}, our partner kitchen in Ambassa. Working with a single trusted kitchen lets us guarantee freshness, hygiene and consistent delivery times.`,
  },
  {
    q: "How do I track my order?",
    a: "The moment your order is accepted, live tracking opens inside the app. You can watch each stage — accepted, preparing, on the way, delivered — and follow the rider on the map in real time.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Swaady supports secure online payments through UPI, cards and popular wallets, along with cash on delivery for customers who prefer paying at the door.",
  },
  {
    q: "Is there a minimum order?",
    a: "There is no fixed minimum order value. Small orders may carry a modest delivery fee, which is always shown clearly before you confirm.",
  },
  {
    q: "Can I cancel an order?",
    a: "Yes. Orders can be cancelled from the Active Orders screen before the kitchen begins preparing your food. Once cooking starts, cancellation is no longer possible.",
  },
  {
    q: "Is Swaady available on iPhone?",
    a: "Swaady is available today for Android in Ambassa. An iOS version is planned and will be announced here as soon as it is ready.",
  },
  {
    q: "How can I contact support?",
    a: `Call or message us on WhatsApp at ${BRAND.phone}, or email ${BRAND.email}. Support is also built into the app under Help & FAQs.`,
  },
];
