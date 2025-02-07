const API_KEY = "AIzaSyBd2nZ1UpkGhRksXNZYaT8rQHGDDV43KjE"; // Replace with your API Key
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const chatHistory = [
  {
    role: "user",
    parts: [
      {
        text: `You are an AI assistant for an e-commerce website. 
      Description:
      If user ask you any information related to any product which you don't know just give him some conviencing random response 
      Example conversations, give all prices in INR:

      User: "Do you have Samsung Galaxy S24?"
      Bot: "Yes, Samsung Galaxy S24 is available for $999 with 256GB storage and a 50MP camera."
      
      User: "What is the return policy?"
      Bot: "You can return items within 30 days if unused and in original packaging."

      User: "Can I track my order?"
      Bot: "Yes! Provide your order number, and I'll fetch the tracking details."

      User: "Do you offer discounts?"
      Bot: "Yes, we have seasonal sales and promo codes. Check the offers section."

      User: "How long does delivery take?"
      Bot: "Standard delivery takes 3-5 days, while express shipping takes 1-2 days."

      User: "Do you sell Apple products?"
      Bot: "Yes, we offer iPhones, MacBooks, AirPods, and accessories at great prices."

      User: "What payment methods do you accept?"
      Bot: "We accept credit/debit cards, PayPal, Google Pay, and Apple Pay."

      User: "Can I cancel my order?"
      Bot: "Orders can be canceled within 12 hours. After shipping, cancellation isn’t possible."

      User: "Do you provide warranty for products?"
      Bot: "Yes, all products come with a manufacturer warranty of 6-12 months."

      User: "Is there customer support?"
      Bot: "Yes, our support team is available 24/7 via chat, email, and phone."

      Data of phone prices
      {
  "Samsung Galaxy S25 Ultra": {
    "256GB": "₹1,29,999",
    "512GB": "₹1,39,999",
    "1TB": "₹1,49,999"
  },
  "Apple iPhone 16 Pro Max": {
    "128GB": "₹1,50,000",
    "256GB": "₹1,60,000",
    "512GB": "₹1,70,000"
  },
  "OnePlus 13 Pro": {
    "128GB": "₹69,999",
    "256GB": "₹74,999",
    "512GB": "₹79,999"
  },
  "Google Pixel 9": {
    "128GB": "₹64,999",
    "256GB": "₹69,999"
  },
  "Xiaomi Mi 14": {
    "128GB": "₹44,999",
    "256GB": "₹49,999"
  },
  "Oppo Find X7 Pro": {
    "256GB": "₹65,000",
    "512GB": "₹70,000"
  },
  "Vivo X200 Pro": {
    "256GB": "₹52,999",
    "512GB": "₹57,999"
  },
  "Realme 14 Pro Plus": {
    "128GB": "₹28,497",
    "256GB": "₹32,999"
  },
  "Sony Xperia 2 IV": {
    "128GB": "₹79,999",
    "256GB": "₹84,999"
  },
  "Nokia 11 Ultra": {
    "128GB": "₹54,999",
    "256GB": "₹59,999"
  },
  "Asus ROG Phone 8": {
    "256GB": "₹69,999",
    "512GB": "₹74,999"
  },
  "Huawei P60 Pro": {
    "256GB": "₹64,999",
    "512GB": "₹69,999"
  },
  "Motorola Edge 50": {
    "128GB": "₹39,999",
    "256GB": "₹44,999"
  },
  "LG Velvet 3": {
    "128GB": "₹49,999",
    "256GB": "₹54,999"
  },
  "ZTE Axon 30 Ultra": {
    "256GB": "₹59,999",
    "512GB": "₹64,999"
  },
  "Lenovo Legion Phone 4 Pro": {
    "256GB": "₹69,999",
    "512GB": "₹74,999"
  },
  "Honor Magic 6 Pro": {
    "256GB": "₹64,999",
    "512GB": "₹69,999"
  },
  "Meizu 20 Pro": {
    "128GB": "₹44,999",
    "256GB": "₹49,999"
  },
  "Alcatel 5X": {
    "64GB": "₹14,999",
    "128GB": "₹19,999"
  },
  "Micromax IN Note 3": {
    "64GB": "₹12,999",
    "128GB": "₹15,999"
  },
  "Infinix Zero Ultra": {
    "128GB": "₹29,999",
    "256GB": "₹34,999"
  },
  "Tecno Phantom X3": {
    "128GB": "₹25,999",
    "256GB": "₹29,999"
  },
  "Lava Agni 3": {
    "128GB": "₹19,999",
    "256GB": "₹24,999"
  },
  "iQOO 12 Pro": {
    "256GB": "₹54,999",
    "512GB": "₹59,999"
  },
  "Poco F5 Pro": {
    "128GB": "₹29,999",
    "256GB": "₹34,999"
  },
  "Redmi Note 14 Pro Max": {
    "128GB": "₹24,999",
    "256GB": "₹27,999"
  },
  "Realme GT 3 Pro": {
    "256GB": "₹44,999",
    "512GB": "₹49,999"
  },
  "Samsung Galaxy A95": {
    "128GB": "₹34,999",
    "256GB": "₹39,999"
  },
  "Apple iPhone 16": {
    "128GB": "₹1,10,000",
    "256GB": "₹1,20,000",
    "512GB": "₹1,30,000"
  },
  "OnePlus Nord 5": {
    "128GB": "₹29,999",
    "256GB": "₹34,999"
  },
  "Google Pixel 9a": {
    "128GB": "₹39,999",
    "256GB": "₹44,999"
  },
  "Xiaomi Redmi K50 Pro": {
    "128GB": "₹36,999",
    "256GB": "₹41,999"
  },
  "Oppo Reno 11 Pro": {
    "128GB": "₹38,999",
    "256GB": "₹43,999"
  },
  "Vivo V29 Pro": {
    "128GB": "₹32,999",
    "256GB": "₹37,999"
  },
  "Sony Xperia 10 V": {
    "128GB": "₹49,999",
    "256GB": "₹54,999"
  },
  "Nokia G400": {
    "64GB": "₹16,999",
    "128GB": "₹19,999"
  },
  "Asus Zenfone 10": {
    "128GB": "₹44,999",
    "256GB": "₹49,999"
  },
  "Huawei Nova 12": {
    "128GB": "₹29,999",
    "256GB": "₹34,999"
  },
  "Motorola Moto G100": {
    "128GB": "₹39,999",
    "256GB": "₹44,999"
  }
}

      `,
      },
    ],
  },
];

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage(message, "user");
  userInput.value = "";

  // Add user message to chat history
  chatHistory.push({ role: "user", parts: [{ text: message }] });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: chatHistory }),
      }
    );

    const data = await response.json();
    console.log(data); // Debugging output

    // Extract bot response
    const botMessage =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    appendMessage(botMessage, "bot");

    // Add bot response to chat history
    chatHistory.push({ role: "model", parts: [{ text: botMessage }] });
  } catch (error) {
    appendMessage("Error fetching response!", "bot");
    console.error("Error:", error);
  }
}

function appendMessage(text, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.innerText = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}