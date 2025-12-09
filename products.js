export const products = [
  {
    id: 1,
    name: "Netflix Premium",
    category: "Streaming",
    price: 4.99,
    duration: "1 Month",
    features: [
      "4K Ultra HD",
      "4 Screens simultaneously",
      "Download on multiple devices",
      "No ads"
    ],
    icon: "🎬",
    popular: true,
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    name: "Amazon Prime Video",
    category: "Streaming",
    price: 3.99,
    duration: "1 Month",
    features: [
      "HD Streaming",
      "Exclusive Prime content",
      "Download available",
      "Multiple profiles"
    ],
    icon: "📺",
    popular: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    name: "Disney+ Hotstar",
    category: "Streaming",
    price: 5.99,
    duration: "1 Month",
    features: [
      "4K content",
      "Live sports",
      "Disney+ originals",
      "4 concurrent streams"
    ],
    icon: "🎭",
    popular: false,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 4,
    name: "YouTube Premium",
    category: "Streaming",
    price: 2.99,
    duration: "1 Month",
    features: [
      "Ad-free videos",
      "Background play",
      "YouTube Music included",
      "Download videos"
    ],
    icon: "▶️",
    popular: true,
    color: "from-red-600 to-red-700"
  },
  {
    id: 5,
    name: "Peacock Premium",
    category: "Streaming",
    price: 3.49,
    duration: "1 Month",
    features: [
      "50,000+ hours of content",
      "Live sports & news",
      "Exclusive originals",
      "Limited ads"
    ],
    icon: "🦚",
    popular: false,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 6,
    name: "HBO Max",
    category: "Streaming",
    price: 6.99,
    duration: "1 Month",
    features: [
      "4K UHD quality",
      "HBO originals",
      "Warner Bros. movies",
      "Download content"
    ],
    icon: "🎪",
    popular: false,
    color: "from-violet-500 to-violet-600"
  },
  {
    id: 7,
    name: "NordVPN Premium",
    category: "VPN",
    price: 3.99,
    duration: "1 Month",
    features: [
      "5500+ servers worldwide",
      "6 devices simultaneously",
      "No logs policy",
      "24/7 support"
    ],
    icon: "🔒",
    popular: true,
    color: "from-blue-600 to-blue-700"
  },
  {
    id: 8,
    name: "ExpressVPN",
    category: "VPN",
    price: 4.49,
    duration: "1 Month",
    features: [
      "Ultra-fast speeds",
      "5 devices",
      "94 countries",
      "Split tunneling"
    ],
    icon: "🛡️",
    popular: false,
    color: "from-red-500 to-red-600"
  },
  {
    id: 9,
    name: "Surfshark VPN",
    category: "VPN",
    price: 2.99,
    duration: "1 Month",
    features: [
      "Unlimited devices",
      "3200+ servers",
      "Ad blocker included",
      "No borders mode"
    ],
    icon: "🦈",
    popular: false,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 10,
    name: "ChatGPT Plus",
    category: "AI Tools",
    price: 15.99,
    duration: "1 Month",
    features: [
      "GPT-4 access",
      "Faster response times",
      "Priority access",
      "Advanced features"
    ],
    icon: "🤖",
    popular: true,
    color: "from-green-500 to-green-600"
  },
  {
    id: 11,
    name: "Blackbox AI Pro",
    category: "AI Tools",
    price: 9.99,
    duration: "1 Month",
    features: [
      "Advanced code generation",
      "Unlimited queries",
      "Priority support",
      "All features unlocked"
    ],
    icon: "⚡",
    popular: true,
    color: "from-gray-700 to-gray-900"
  },
  {
    id: 12,
    name: "Midjourney Pro",
    category: "AI Tools",
    price: 19.99,
    duration: "1 Month",
    features: [
      "Unlimited generations",
      "Fast mode",
      "Commercial usage",
      "Stealth mode"
    ],
    icon: "🎨",
    popular: false,
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 13,
    name: "Spotify Premium",
    category: "Music",
    price: 2.99,
    duration: "1 Month",
    features: [
      "Ad-free music",
      "Download songs",
      "High quality audio",
      "Unlimited skips"
    ],
    icon: "🎵",
    popular: true,
    color: "from-green-600 to-green-700"
  },
  {
    id: 14,
    name: "Canva Pro",
    category: "Design",
    price: 7.99,
    duration: "1 Month",
    features: [
      "100M+ premium content",
      "Brand kit",
      "Background remover",
      "Resize designs"
    ],
    icon: "🎨",
    popular: false,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 15,
    name: "Grammarly Premium",
    category: "Productivity",
    price: 8.99,
    duration: "1 Month",
    features: [
      "Advanced grammar checks",
      "Plagiarism detector",
      "Tone suggestions",
      "Word choice"
    ],
    icon: "✍️",
    popular: false,
    color: "from-emerald-500 to-emerald-600"
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Streaming", value: "Streaming" },
  { name: "VPN", value: "VPN" },
  { name: "AI Tools", value: "AI Tools" },
  { name: "Music", value: "Music" },
  { name: "Design", value: "Design" },
  { name: "Productivity", value: "Productivity" }
];
