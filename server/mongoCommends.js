// show dbs //מראה לנו את כל הקולקשנים שיצרנו
// use students//יוצר לנו קולקשן חדש ומעביר אותנו אליו , במקרה הזה יצרנו קולקשן בשם סטודנטס
// db.students.insert({name:"nir",lastName:"ezra",age:35}) //הכנסת דוקומנט(אובייקט) לקולקשן 
// db.students.find()//חיפוש בתוך הקולקשן שיצרנו מקודם
// db.students.find({name:/A/}) //חיפוש בקולקשן את האובייקט שמכיל בתוכו את האות איי
// db.students.find({lastName:/^M/})//חיפוש בקולקשן את כל שם המשפחה שמתחיל באות M
// db.students.find({lastName:/s$/})//חיפוש בקולקשן את כל שמות המשפחה שמסתיימים באות S
// db.students.find({age:{$gt:50}})//חיפוש בקולקשן גילאים מעל 50
// db.students.find({age:{$lt:50}})//חיפוש בקולקשן גילאים מתחת 50
// db.students.find({$and:[{age:{$lt:70}},{age:{$gt:40}}]})//חיפוש בקולקשן אובייקט שטווח הגיל שלו בין 40 ל 70
// db.students.find({$and:[{age:{$lt:60}},{name:/a/}]})//חיפוןש בקולקשן יוזרים שגילם קטן מ60 ויש להם את האות איי בשם הפרטי
// db.students.find().sort({age:1})//מיון הקולקשן לפי גילאים מהקטן לגדול
// db.students.find().sort({age:-1})//מיון הקולקשן לפי גילאים מהגדול לקטן אפשרי לסנן גם אותיות A-Z או Z-A
// db.students.find().sort({name:-1}).limit(2)//מיון הקולקשן השמות הפרטיים לפי אותיות מהגדול לקטן אבל להראות רק 2 יוזרים
// db.students.find().sort({age:1}).skip(2)//לסדר גילאים מהקטן לגדול אבל לדלג על 2 יוזרים
// b.students.update({name:"Ben"},{$set:{age:700}} )//עדכון גיל היוזר הנבחר בקולקשן
// db.students.update({age:{$gt:40}},{$set:{isAdult:true}},{multi:true})//כל מי שמעל גיל 40 ת נוסיף ךו קי is adult=true , הפרמטר מולטי יגרום לכך שזה יחול על כל האובייקטים שעונים לקריטריון  ולא רק על אחד
// db.students.update({age:{$lt:40}},{$set:{isAdult:false}},{multi:true})//כל מי שמעל גיל 40 ת נוסיף ךו קי is adult=false , הפרמטר מולטי יגרום לכך שזה יחול על כל האובייקטים שעונים לקריטריון  ולא רק על אחד

// let firstNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank"]//יצרנו משתנה של שם פרטי והכנסנו לתוכו ערכים
// let lastNames = ["Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig"]//יצרנו משתנה של שם משפחה והכנסנו לתוכו ערכים

// firstNames.forEach((element,i) => {
//     db.students.insert({name:element,lastName:lastNames[i],age:10+Math.floor(Math.random()*97)})//יצרנו לולאה שמתייחסת לכל איבר במערך שיצרנו ומכניסה את האיברים לתוך הדאטהבייסתבנוסף יצרנו פונקצייה שמייצרת לנו גיל רנדומלי
// });

