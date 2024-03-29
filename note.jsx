/* 1 
ইনপুট ফিল্ডে কি পরিবর্তন হচ্ছে সেটাকে দেখার জন্য onChange ব্যবহার করা হয়েছে 
 */

/* 2
 আমরা জানি state ব্যবহারের মূল উদ্দেশ্য হচ্ছে  কোন কিছুর পরিবর্তনকে হ্যান্ডেল
     করা তো ঠিক একই কাজ আমরা setEmail ও setError-এ করেছি ।
স্ট্রিং এর default value empty string। তাই state এ empty string দেয়া হয়েছে ।

যেমন করে error message কে দেখানোর জন্য error useState ব্যবহার করেছিলাম 
ঠিক একই ভাবে সাকসেস মেসেজ কে দেখানোর জন্য ব্যবহার করেছি success state
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

/* 5
export করা app টাকে এখানে getAuth এর মাধ্যমে পেয়েছি
*/

/* 6
এটা এখানে নেওয়ার মূল উদ্দেশ্য হচ্ছে যেহেতু  এখান থেকে ডাটা সাবমিট হয় তাই
 এখান থেকেই ইনপুট ফিল্ডের ভ্যালু পাওয়া যায় 
*/

/* ৭
ঠিকমতো ইনপুট validation পূরণ না করলে রেজিষ্টারে error দেখাবে 
setError(error.message) এর কারণে
 এটা ঠিক আছে কিন্তু যদি ঠিকমতো রেজিস্টার হয়ে যায় তাহলে আগের 
 সেট setError(error.message) কে দূর করার জন্য setError('')  দিতে হবে ।
 */

/* 8
ঠিকমতো করে রেজিস্টার হলে ফরমটাকে খালি করার জন্য event.target.reset()
*/

/* 9
আবার যদি error খেয়ে যায় তাহলে  setSuccess কে দূর করার 
জন্য catch-এ empty setSuccess দিতে হবে
*/

/* 10
ভেলিডেশন টা ঠিক যে জায়গায় আছে ওই জায়গায় দিতে হবে অন্যথায় 
এর উপরে নিচে দিলে উল্টাপাল্টা মেসেজ দেখাবে 
*/

/* 11
email ভেরিয়েবলে emailRef.current.value এটা রাখার মূল উদ্দেশ্য হচ্ছে পাসওয়ার্ড 
 resest করার ক্ষেত্রে, যদি পাসওয়ার্ড রিসেট বাটনের চাপ দিই তাহলে
  ফর্ম থেকে সকল ডাটাকে যেন পাই 

*/