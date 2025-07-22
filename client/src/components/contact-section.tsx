import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { insertContactSubmissionSchema } from '@shared/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

export function ContactSection() {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      language: language,
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: language === 'fr' ? "Message envoyé !" : "Message sent!",
        description: language === 'fr' ? "Nous vous répondrons dans les plus brefs délais." : "We will get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite lors de l'envoi du message." : "An error occurred while sending the message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    submitContactMutation.mutate({ ...data, language });
  };

  const subjects = [
    { value: 'rendering', label: t('contact.form.subjects.rendering') },
    { value: 'animation', label: t('contact.form.subjects.animation') },
    { value: 'interactive', label: t('contact.form.subjects.interactive') },
    { value: 'interior', label: t('contact.form.subjects.interior') },
    { value: 'furniture', label: t('contact.form.subjects.furniture') },
    { value: 'other', label: t('contact.form.subjects.other') },
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 fade-in" data-animation-id="contact-header">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient">
            {t('contact.title')}
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="fade-in space-y-8" data-animation-id="contact-info">
            <div className="glass-effect-strong rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-10 text-gradient-gold">{t('contact.info.title')}</h3>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">{t('contact.info.email')}</p>
                    <a href="mailto:contact@visualstudio360.com" className="text-white hover:text-gradient transition-all duration-300 text-xl font-semibold">
                      contact@visualstudio360.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">{t('contact.info.phone')}</p>
                    <a href="tel:+33123456789" className="text-white hover:text-gradient transition-all duration-300 text-xl font-semibold">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">{t('contact.info.address')}</p>
                    <p className="text-white text-xl font-semibold">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <Button variant="outline" size="icon" className="glass-effect w-16 h-16 hover:bg-white/10 border-white/20 rounded-2xl">
                <Linkedin size={24} />
              </Button>
              <Button variant="outline" size="icon" className="glass-effect w-16 h-16 hover:bg-white/10 border-white/20 rounded-2xl">
                <Instagram size={24} />
              </Button>
              <Button variant="outline" size="icon" className="glass-effect w-16 h-16 hover:bg-white/10 border-white/20 rounded-2xl">
                <FaBehance size={24} />
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in" data-animation-id="contact-form">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="glass-effect-strong rounded-3xl p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.form.namePlaceholder')}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">{t('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder={t('contact.form.emailPlaceholder')}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">{t('contact.form.subject')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <SelectValue placeholder={t('contact.form.subjectPlaceholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5}
                          placeholder={t('contact.form.messagePlaceholder')}
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={submitContactMutation.isPending}
                  className="w-full premium-button text-white px-8 py-6 text-xl font-semibold rounded-2xl"
                >
                  {submitContactMutation.isPending ? 'Envoi...' : t('contact.form.submit')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
