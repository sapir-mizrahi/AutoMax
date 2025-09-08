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
              <div className="bg-gray-300 p-2 rounded-lg">
                <img src="/image (2).png" alt="Auto Max Logo" className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Auto Max</h1>
                <p className="text-sm font-medium" style={{color: '#153969'}}>ממקסמים את העסק באוטומט</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#153969'}}}>בית</a>
              <a href="#services" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#153969'}}}>שירותים</a>
              <a href="#testimonials" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#153969'}}}>המלצות</a>
              <a href="#contact" className="text-gray-700 transition-colors" style={{'&:hover': {color: '#153969'}}}>צור קשר</a>
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
              <a href="#home" className="block px-3 py-2 text-gray-700" style={{'&:hover': {color: '#153969'}}}>בית</a>
              <a href="#services" className="block px-3 py-2 text-gray-700" style={{'&:hover': {color: '#153969'}}}>שירותים</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700" style={{'&:hover': {color: '#153969'}}}>המלצות</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700" style={{'&:hover': {color: '#153969'}}}>צור קשר</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
              alt="Automation Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ממקסמים את העסק שלכם
              <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(to right, #FF66C4, #153969)`}}> באוטומט</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              פתרונות אוטומציה עסקית מתקדמים, בניית מערכות CRM מותאמות אישית וייעול תהליכים 
              שיחסכו לכם זמן וכסף ויגדילו את הרווחיות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" style={{backgroundColor: '#153969', '&:hover': {backgroundColor: '#0f2a4f'}}}>
                התחל עכשיו
                <ArrowRight className="inline h-5 w-5 mr-2" />
              </button>
              <button className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" style={{borderColor: '#FF66C4', color: '#FF66C4', '&:hover': {backgroundColor: '#FF66C4', color: 'white'}}}>
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
              <div className="p-3 rounded-lg w-fit mb-4" style={{backgroundColor: '#FF66C4', opacity: 0.1}}>
                <Users className="h-8 w-8" style={{color: '#FF66C4'}} />
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
              <div className="p-3 rounded-lg w-fit mb-4" style={{backgroundColor: '#153969', opacity: 0.1}}>
                <Settings className="h-8 w-8" style={{color: '#153969'}} />
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
              <div className="p-3 rounded-lg w-fit mb-4" style={{backgroundColor: '#FF66C4', opacity: 0.1}}>
                <BarChart3 className="h-8 w-8" style={{color: '#FF66C4'}} />
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
                <div className="rounded-full w-12 h-12 flex items-center justify-center text-white font-bold" style={{backgroundColor: '#153969'}}>
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
                <div className="rounded-full w-12 h-12 flex items-center justify-center text-white font-bold" style={{backgroundColor: '#FF66C4'}}>
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
                <div className="rounded-full w-12 h-12 flex items-center justify-center text-white font-bold" style={{backgroundColor: '#153969'}}>
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
                <div className="p-3 rounded-lg" style={{backgroundColor: '#153969', opacity: 0.1}}>
                  <Phone className="h-6 w-6" style={{color: '#153969'}} />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">טלפון</h4>
                  <p className="text-gray-600">050-123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg" style={{backgroundColor: '#FF66C4', opacity: 0.1}}>
                  <Mail className="h-6 w-6" style={{color: '#FF66C4'}} />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">אימייל</h4>
                  <p className="text-gray-600">info@auto-max.co.il</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg" style={{backgroundColor: '#153969', opacity: 0.1}}>
                  <MapPin className="h-6 w-6" style={{color: '#153969'}} />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold text-gray-900">כתובת</h4>
                  <p className="text-gray-600">תל אביב, ישראל</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl" style={{background: 'linear-gradient(to bottom right, rgba(255, 102, 196, 0.1), rgba(21, 57, 105, 0.1))'}}>
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 transition-all"
                      style={{'&:focus': {ringColor: '#FF66C4', borderColor: '#FF66C4'}}}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 transition-all"
                      style={{'&:focus': {ringColor: '#FF66C4', borderColor: '#FF66C4'}}}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 transition-all"
                      style={{'&:focus': {ringColor: '#FF66C4', borderColor: '#FF66C4'}}}
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 transition-all"
                      style={{'&:focus': {ringColor: '#FF66C4', borderColor: '#FF66C4'}}}
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 transition-all resize-none"
                    style={{'&:focus': {ringColor: '#FF66C4', borderColor: '#FF66C4'}}}
                    placeholder="ספרו לנו על העסק שלכם והאתגרים שאתם מתמודדים איתם..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{background: `linear-gradient(to right, #FF66C4, #153969)`, '&:hover': {opacity: 0.9}}}
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
                <div className="bg-gray-300 p-2 rounded-lg">
                  <img src="/image (2).png" alt="Auto Max Logo" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Auto Max</h3>
                  <p className="text-sm" style={{color: '#FF66C4'}}>ממקסמים את העסק באוטומט</p>
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