import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Zap, 
  Users, 
  BarChart3, 
  Settings, 
  Star, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('תודה על פנייתך! נחזור אליך בקרוב');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Auto Max</h1>
                <p className="text-sm text-blue-600 font-medium">ממקסמים את העסק באוטומט</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">בית</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">שירותים</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">המלצות</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">צור קשר</a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">בית</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">שירותים</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">המלצות</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">צור קשר</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ממקסמים את העסק שלכם
              <span className="text-blue-600"> באוטומט</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              פתרונות אוטומציה עסקית מתקדמים, בניית מערכות CRM מותאמות אישית וייעול תהליכים 
              שיחסכו לכם זמן וכסף ויגדילו את הרווחיות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                התחל עכשיו
                <ArrowRight className="inline h-5 w-5 mr-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                לפגישת ייעוץ חינם
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אנחנו מספקים פתרונות מלאים לאוטומציה עסקית שיקחו את העסק שלכם לשלב הבא
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRM Systems */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">מערכות CRM</h3>
              <p className="text-gray-600 mb-4">
                בניית מערכות ניהול לקוחות מותאמות אישית לעסק שלכם. ניהול מכירות, מעקב אחר לידים וניתוח נתוני לקוחות
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  ניהול בסיס נתוני לקוחות
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  מעקב אחר מכירות ולידים
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  דוחות וניתוחים מתקדמים
                </li>
              </ul>
            </div>

            {/* Business Automation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">אוטומציה עסקית</h3>
              <p className="text-gray-600 mb-4">
                אוטומציה של תהליכים עסקיים חוזרים, חיסכון בזמן וכסף והפחתת טעויות אנוש
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  אוטומציה של תהליכי מכירה
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  ניהול מלאי אוטומטי
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  דיוור ושיווק אוטומטי
                </li>
              </ul>
            </div>

            {/* Analytics & Reports */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ניתוח נתונים</h3>
              <p className="text-gray-600 mb-4">
                דוחות ותובנות עסקיות מתקדמות שיעזרו לכם לקבל החלטות מושכלות ולגדול
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  דוחות ביצועים בזמן אמת
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  תחזיות מכירות
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                  ניתוח תרנדים עסקיים
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">מה הלקוחות שלנו אומרים</h2>
            <p className="text-xl text-gray-600">
              הצלחות אמיתיות של עסקים שעבדו איתנו
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Auto Max שינתה לנו את המשחק לחלוטין. המערכת שבנו עזרה לנו להגדיל את המכירות ב-40% תוך שלושה חודשים."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  ח.כ
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900">חברת כהן ושותפים</h4>
                  <p className="text-sm text-gray-500">שירותי ייעוץ עסקי</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "הפתרון שקיבלנו חוסך לנו שעות של עבודה כל יום. הצוות מקצועי ותמיד זמין לתמיכה."
              </p>
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  ט.ס
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900">טכנולוגיות סמארט בע"מ</h4>
                  <p className="text-sm text-gray-500">פיתוח תוכנה</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "המערכת פשוט מושלמת. כל מה שצריך במקום אחד, קל לשימוש ותוצאות מדהימות."
              </p>
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  מ.ל
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-gray-900">מרכז לוי לרפואה</h4>
                  <p className="text-sm text-gray-500">שירותי בריאות</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">בואו נתחיל לעבוד ביחד</h2>
            <p className="text-xl text-gray-600">
              השאירו פרטים ונחזור אליכם בהקדם לפגישת ייעוץ ללא התחייבות
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">פרטי התקשרות</h3>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">טלפון</h4>
                  <p className="text-gray-600">050-123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">אימייל</h4>
                  <p className="text-gray-600">info@auto-max.co.il</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">כתובת</h4>
                  <p className="text-gray-600">תל אביב, ישראל</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      שם החברה
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder="ספרו לנו על העסק שלכם והאתגרים שאתם מתמודדים איתם..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  שלח פנייה
                  <ArrowRight className="inline h-5 w-5 mr-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Auto Max</h3>
                  <p className="text-sm text-blue-400">ממקסמים את העסק באוטומט</p>
                </div>
              </div>
              <p className="text-gray-400">
                פתרונות אוטומציה עסקית מתקדמים שמביאים תוצאות אמיתיות
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">שירותים</h4>
              <ul className="space-y-2 text-gray-400">
                <li>מערכות CRM</li>
                <li>אוטומציה עסקית</li>
                <li>ניתוח נתונים</li>
                <li>ייעוץ דיגיטלי</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
              <div className="space-y-2 text-gray-400">
                <p>050-123-4567</p>
                <p>info@auto-max.co.il</p>
                <p>תל אביב, ישראל</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Auto Max. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;