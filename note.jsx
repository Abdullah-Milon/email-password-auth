/* 1 
ইনপুট ফিল্ডে কি পরিবর্তন হচ্ছে সেটাকে দেখার জন্য onChange ব্যবহার করা হয়েছে 
 */
/* 2
 আমরা জানি state ব্যবহারের মূল উদ্দেশ্য হচ্ছে  কোন কিছুর পরিবর্তনকে হ্যান্ডেল
     করা তো ঠিক একই কাজ আমরা setEmail ও করেছি ।
স্ট্রিং এর default value empty string। তাই state এ empty string দেয়া হয়েছে ।  
*/
/* 3 
input field-এ focus থাকা অবস্থায় এর বাইরে ক্লিক করলে focus টা blur হয়ে যায়, 
তখন আর ওই input field focus থাকে না ।
------->>>>>>>>>>>>>>
onChange & onBlur এদের মধ্যে মূল পার্থক্য হচ্ছে onChange-এ পরিবর্তনটা সরাসরি 
দেখা যায়  কিন্তু 
onBlur-এ পরিবর্তনটা সরাসরি দেখা যায় না যতক্ষণ না পর্যন্ত ফোকাস আউট হয় 
*/
/* 
form সাবমিট করলে বাই ডিফল্ট হিসেবে সাবমিট করে page টা কে refresh করে 
অন্য জায়গায় চলে যাবে তাই এই অবস্থাকে prevent করতে চাইলে
 event.preventDefault() দিতে হবে,
  তবে সাধারণত এটা ফাংশনের পরের লাইনে দেওয়া ভালো, সবার শেষে দিলেও অসুবিধা নাই 

*/