import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Header } from './Header';
import type { User, Language } from '../App';

interface SupportScreenProps {
  onBack: () => void;
  user: User;
  onLogout: () => void;
  cartItemsCount: number;
  onGoToCart: () => void;
  onGoToCategories: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export function SupportScreen({ 
  onBack,
  user,
  onLogout,
  cartItemsCount,
  onGoToCart,
  onGoToCategories,
  language,
  onToggleLanguage
}: SupportScreenProps) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    reason: '',
    issueType: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const texts = {
    en: {
      support: 'Customer Support',
      subtitle: 'We are here to help you',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      chat: 'Live Chat',
      chatAvailable: 'Available 9AM - 6PM',
      manager: 'Manager',
      managerName: 'Eduardo Chavez',
      managerEmail: 'Direct Contact',
      supportForm: 'Support Form',
      name: 'Full Name',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number (Optional)',
      reason: 'Reason for Contact',
      selectReason: 'Select a reason',
      productIssue: 'Product Issue',
      shippingIssue: 'Shipping Issue',
      returnRefund: 'Return/Refund',
      accountIssue: 'Account Issue',
      other: 'Other',
      issueType: 'Type of Issue',
      selectIssue: 'Select issue type',
      technicalProblem: 'Technical Problem',
      paymentIssue: 'Payment Issue',
      productQuality: 'Product Quality',
      deliveryDelay: 'Delivery Delay',
      notReceived: 'Not Received',
      wrongProduct: 'Wrong Product',
      damagedProduct: 'Damaged Product',
      general: 'General Inquiry',
      description: 'Description',
      descriptionPlaceholder: 'Please describe your issue in detail...',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      successTitle: 'Request Submitted Successfully!',
      successMessage: 'We have received your support request. Our team will contact you within 24 hours.',
      submitAnother: 'Submit Another Request',
      faq: 'Frequently Asked Questions',
      faqShipping: 'How long does shipping take?',
      faqShippingAnswer: 'Standard shipping takes 3-5 business days. Free shipping on orders over $2,999.',
      faqReturns: 'What is your return policy?',
      faqReturnsAnswer: 'We accept returns within 30 days of purchase for items in original condition.',
      faqAuthenticity: 'How do you ensure product authenticity?',
      faqAuthenticityAnswer: 'All items are verified by our expert team before listing.',
    },
    es: {
      support: 'Soporte al Cliente',
      subtitle: 'Estamos aquí para ayudarte',
      contactInfo: 'Información de Contacto',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      chat: 'Chat en Vivo',
      chatAvailable: 'Disponible 9AM - 6PM',
      manager: 'Gerente',
      managerName: 'Eduardo Chavez',
      managerEmail: 'Contacto Directo',
      supportForm: 'Formulario de Soporte',
      name: 'Nombre Completo',
      emailAddress: 'Correo Electrónico',
      phoneNumber: 'Número de Teléfono (Opcional)',
      reason: 'Motivo de Contacto',
      selectReason: 'Selecciona un motivo',
      productIssue: 'Problema con Producto',
      shippingIssue: 'Problema de Envío',
      returnRefund: 'Devolución/Reembolso',
      accountIssue: 'Problema de Cuenta',
      other: 'Otro',
      issueType: 'Tipo de Problema',
      selectIssue: 'Selecciona el tipo de problema',
      technicalProblem: 'Problema Técnico',
      paymentIssue: 'Problema de Pago',
      productQuality: 'Calidad del Producto',
      deliveryDelay: 'Retraso en Entrega',
      notReceived: 'No Recibido',
      wrongProduct: 'Producto Incorrecto',
      damagedProduct: 'Producto Dañado',
      general: 'Consulta General',
      description: 'Descripción',
      descriptionPlaceholder: 'Por favor describe tu problema en detalle...',
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      successTitle: '¡Solicitud Enviada Exitosamente!',
      successMessage: 'Hemos recibido tu solicitud de soporte. Nuestro equipo te contactará en las próximas 24 horas.',
      submitAnother: 'Enviar Otra Solicitud',
      faq: 'Preguntas Frecuentes',
      faqShipping: '¿Cuánto tarda el envío?',
      faqShippingAnswer: 'El envío estándar toma 3-5 días hábiles. Envío gratis en pedidos mayores a $2,999.',
      faqReturns: '¿Cuál es su política de devoluciones?',
      faqReturnsAnswer: 'Aceptamos devoluciones dentro de 30 días de la compra para artículos en condición original.',
      faqAuthenticity: '¿Cómo aseguran la autenticidad de los productos?',
      faqAuthenticityAnswer: 'Todos los artículos son verificados por nuestro equipo experto antes de listarlos.',
    }
  };

  const t = texts[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      reason: '',
      issueType: '',
      description: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Header */}
      <Header
        user={user}
        cartItemsCount={cartItemsCount}
        onGoToCart={onGoToCart}
        onGoToCategories={onGoToCategories}
        onLogout={onLogout}
        language={language}
        onToggleLanguage={onToggleLanguage}
        showBackButton={true}
        onBack={onBack}
        title={t.support}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-gray-900 mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.support}
          </h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-200">
              <h3 className="text-gray-900 mb-6">{t.contactInfo}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t.phone}</p>
                    <p className="text-gray-600">+52 618 111 2222</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t.email}</p>
                    <p className="text-gray-600">support@bazarstar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-all group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t.chat}</p>
                    <p className="text-gray-600">{t.chatAvailable}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-200">
              <h3 className="text-gray-900 mb-4">{t.manager}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t.managerName}</p>
                    <p className="text-gray-600">+52 618 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{t.managerEmail}</p>
                    <p className="text-gray-600">eddisito@bazarstar.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-200">
              <h3 className="text-gray-900 mb-4">{t.faq}</h3>
              
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer list-none p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all font-medium text-gray-700">
                    {t.faqShipping}
                  </summary>
                  <p className="mt-2 p-3 text-gray-600 text-sm bg-white rounded-lg border-l-4 border-blue-500">
                    {t.faqShippingAnswer}
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all font-medium text-gray-700">
                    {t.faqReturns}
                  </summary>
                  <p className="mt-2 p-3 text-gray-600 text-sm bg-white rounded-lg border-l-4 border-purple-500">
                    {t.faqReturnsAnswer}
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer list-none p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all font-medium text-gray-700">
                    {t.faqAuthenticity}
                  </summary>
                  <p className="mt-2 p-3 text-gray-600 text-sm bg-white rounded-lg border-l-4 border-green-500">
                    {t.faqAuthenticityAnswer}
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-200">
              {!isSubmitted ? (
                <>
                  <h3 className="text-gray-900 mb-6">{t.supportForm}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">{t.name}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-2 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">{t.emailAddress}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-2 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">{t.phoneNumber}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="reason" className="text-gray-700 font-medium">{t.reason}</Label>
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400/20 transition-all"
                        >
                          <option value="">{t.selectReason}</option>
                          <option value="product">{t.productIssue}</option>
                          <option value="shipping">{t.shippingIssue}</option>
                          <option value="return">{t.returnRefund}</option>
                          <option value="account">{t.accountIssue}</option>
                          <option value="other">{t.other}</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issueType" className="text-gray-700 font-medium">{t.issueType}</Label>
                        <select
                          id="issueType"
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400/20 transition-all"
                        >
                          <option value="">{t.selectIssue}</option>
                          <option value="technical">{t.technicalProblem}</option>
                          <option value="payment">{t.paymentIssue}</option>
                          <option value="quality">{t.productQuality}</option>
                          <option value="delay">{t.deliveryDelay}</option>
                          <option value="notreceived">{t.notReceived}</option>
                          <option value="wrong">{t.wrongProduct}</option>
                          <option value="damaged">{t.damagedProduct}</option>
                          <option value="general">{t.general}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-gray-700 font-medium">{t.description}</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder={t.descriptionPlaceholder}
                        required
                        rows={6}
                        className="border-2 border-gray-200 focus:border-blue-400 focus:ring-blue-400/20 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          {t.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t.submit}
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4">{t.successTitle}</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {t.successMessage}
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                  >
                    {t.submitAnother}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}