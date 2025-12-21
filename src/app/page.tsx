'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Users, Globe, TrendingUp, Zap, Shield, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const brands = [
    { 
      name: 'Alumni', 
      description: 'English & Spanish Learning', 
      color: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', 
      icon: '🎓',
      features: ['Certificação Internacional', 'Método Imersivo', 'Suporte 24/7']
    },
    { 
      name: 'TEACH', 
      description: 'AI Education Platform', 
      color: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', 
      icon: '🤖',
      features: ['IA Personalizada', 'Analytics Avançado', 'Integração LMS']
    },
    { 
      name: 'Sprix', 
      description: 'Coding & Mathematics', 
      color: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', 
      icon: '💻',
      features: ['Gamificação', 'Projetos Reais', 'Mentoria Individual']
    },
    { 
      name: 'JINSO', 
      description: 'Testing & WhatsApp Solutions', 
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', 
      icon: '📱',
      features: ['Automação WhatsApp', 'Testes A/B', 'CRM Integrado']
    },
    { 
      name: 'Kidpreneurs', 
      description: 'Entrepreneurship for Kids', 
      color: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)', 
      icon: '👶',
      features: ['Metodologia Lúdica', 'Projetos Práticos', 'Desenvolvimento Socioemocional']
    },
  ]

  const stats = [
    { label: 'Franqueados Ativos', value: '250+', icon: Users },
    { label: 'Comissão Média', value: '20%', icon: TrendingUp },
    { label: 'Estados Cobertos', value: '15', icon: Globe },
    { label: 'Crescimento', value: '+45%', icon: BarChart3 },
  ]

  const benefits = [
    { title: 'Investimento Fixo', description: 'Apenas R$ 50.000 para começar', icon: '💰' },
    { title: 'Comissão Unificada', description: '20% em todas as marcas', icon: '📈' },
    { title: 'Suporte Completo', description: 'Treinamento e mentoria contínua', icon: '🤝' },
    { title: 'Território Exclusivo', description: 'Gestão inteligente de leads', icon: '🗺️' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #E2E8F0', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>B</span>
              </div>
              <h1 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                color: 'transparent' 
              }}>
                Better Sell
              </h1>
            </div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/dashboard" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Dashboard
              </Link>
              <Link href="/planning" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Financeiro
              </Link>
              <Link href="/business-plan" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Plano de Negócios
              </Link>
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Quero ser Franqueado</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        padding: '120px 24px 100px 24px', 
        textAlign: 'center',
        background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 45%, rgba(248, 250, 252, 1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-20%',
          width: '60%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-20%',
          width: '50%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          {/* Hero Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#3B82F6'
          }}>
            <Zap style={{ width: '16px', height: '16px' }} />
            ✨ Nova Plataforma Multi-Brand
          </div>
          
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold', 
            marginBottom: '32px', 
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            <span style={{ 
              background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}>
              Franquias
            </span>{' '}
            <span style={{ color: '#1E293B' }}>Educacionais</span>
            <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}>Inteligentes</span>
          </h1>
          
          <p style={{ 
            fontSize: '22px', 
            color: '#64748B', 
            marginBottom: '48px', 
            maxWidth: '750px', 
            margin: '0 auto 48px auto',
            lineHeight: '1.6' 
          }}>
            Transforme sua carreira vendendo <strong style={{ color: '#3B82F6' }}>5 marcas premium</strong> de educação com uma única plataforma. 
            <span style={{ color: '#10B981', fontWeight: '600' }}>20% de comissão</span> unificada e suporte completo.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.12)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3B82F6', marginBottom: '4px' }}>R$ 50k</div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>Investimento Inicial</div>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(16, 185, 129, 0.1)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(16, 185, 129, 0.12)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10B981', marginBottom: '4px' }}>20%</div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>Comissão Unificada</div>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 92, 246, 0.1)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '4px' }}>5</div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>Marcas Premium</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Quero Ser Franqueado
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={{
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#3B82F6',
              border: '2px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Ver Plano de Negócios
              <BarChart3 style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '100px 24px', 
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)',
        borderTop: '1px solid rgba(59, 130, 246, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #1E293B 0%, #475569 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}>
              Resultados Comprovados
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
              Números que falam por si só sobre o sucesso da nossa rede de franqueados
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {stats.map((stat, index) => {
              const gradients = [
                'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
              ]
              return (
                <div key={stat.label} style={{ 
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}>
                  {/* Background Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: gradients[index]
                  }} />
                  
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: gradients[index],
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px auto',
                    boxShadow: `0 8px 25px ${gradients[index].includes('#3B82F6') ? 'rgba(59, 130, 246, 0.3)' : gradients[index].includes('#10B981') ? 'rgba(16, 185, 129, 0.3)' : gradients[index].includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                  }}>
                    <stat.icon style={{ width: '36px', height: '36px', color: 'white' }} />
                  </div>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#1E293B', marginBottom: '12px', lineHeight: '1' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '16px', color: '#64748B', fontWeight: '500' }}>
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{ 
        padding: '120px 24px', 
        background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.03) 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '50px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#8B5CF6'
            }}>
              <Star style={{ width: '16px', height: '16px' }} />
              5 Marcas Premium
            </div>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent',
              lineHeight: '1.1'
            }}>
              Portfólio Educacional
            </h2>
            <p style={{ fontSize: '20px', color: '#64748B', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Comercialize as marcas educacionais mais inovadoras do mercado através de uma única plataforma inteligente
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px' 
          }}>
            {brands.map((brand, index) => (
              <div
                key={brand.name} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Header with gradient */}
                <div style={{ 
                  height: '6px', 
                  background: brand.color,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    animation: 'shimmer 2s infinite'
                  }} />
                </div>
                
                {/* Card Content */}
                <div style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                    <div style={{
                      fontSize: '48px',
                      width: '80px',
                      height: '80px',
                      background: brand.color,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 25px ${brand.color.includes('#3B82F6') ? 'rgba(59, 130, 246, 0.25)' : brand.color.includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.25)' : brand.color.includes('#10B981') ? 'rgba(16, 185, 129, 0.25)' : brand.color.includes('#F59E0B') ? 'rgba(245, 158, 11, 0.25)' : 'rgba(236, 72, 153, 0.25)'}`
                    }}>
                      <span style={{ fontSize: '32px' }}>{brand.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', marginBottom: '8px' }}>
                        {brand.name}
                      </h3>
                      <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>
                        {brand.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    {brand.features.map((feature, idx) => (
                      <div key={feature} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        marginBottom: '12px'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <CheckCircle style={{ width: '14px', height: '14px', color: 'white' }} />
                        </div>
                        <span style={{ fontSize: '15px', color: '#475569', fontWeight: '500' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '20px 24px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    borderRadius: '16px',
                    border: '1px solid rgba(16, 185, 129, 0.15)'
                  }}>
                    <span style={{ fontSize: '16px', color: '#475569', fontWeight: '600' }}>Comissão Unificada</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>20%</span>
                      <TrendingUp style={{ width: '20px', height: '20px', color: '#10B981' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: '#1E293B'
            }}>
              Por que Better Sell?
            </h2>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '48px', 
                  marginBottom: '16px',
                  filter: 'grayscale(0.3)'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  marginBottom: '8px', 
                  color: '#1E293B' 
                }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#64748B' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 24px', 
        background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}>
            Pronto para se Tornar um Franqueado Better Sell?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
            Comece a vender múltiplas marcas educacionais premium com nosso sistema de franquia comprovado.
            Investimento de R$50k, comissão de 20%, e suporte completo.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              size="lg" 
              style={{ 
                backgroundColor: 'white', 
                color: '#3B82F6', 
                padding: '12px 32px',
                fontSize: '16px'
              }}
            >
              Candidatar-se Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              style={{ 
                borderColor: 'white', 
                color: 'white', 
                padding: '12px 32px',
                fontSize: '16px'
              }}
            >
              Baixar Prospecto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1E293B', color: 'white', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px' 
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold' }}>B</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Better Sell</span>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '14px' }}>
                Plataforma de franquias multi-marca para o ecossistema Better Tech.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Plataforma</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/dashboard" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Dashboard</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Analytics</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Gestão de Leads</Link>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Suporte</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Central de Ajuda</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Treinamentos</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Comunidade</Link>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Better Tech</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Sobre Nós</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Política de Privacidade</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Termos de Uso</Link>
              </div>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #334155', 
            marginTop: '32px', 
            paddingTop: '32px', 
            textAlign: 'center' 
          }}>
            <p style={{ fontSize: '14px', color: '#94A3B8' }}>
              &copy; 2024 Better Tech. Todos os direitos reservados. Construído com filosofia AI humana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}