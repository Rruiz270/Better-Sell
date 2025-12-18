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
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '24px', 
            lineHeight: '1.1' 
          }}>
            <span style={{ 
              background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}>
              Multi-Brand
            </span>{' '}
            <span style={{ color: '#1E293B' }}>Franchising</span>
            <br />
            <span style={{ color: '#475569' }}>Made Simple</span>
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#64748B', 
            marginBottom: '40px', 
            maxWidth: '700px', 
            margin: '0 auto 40px auto' 
          }}>
            Venda Alumni, TEACH, Sprix, JINSO e Kidpreneurs com uma plataforma unificada. 
            20% de comissão em todas as marcas com gestão inteligente de território.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <Button 
              size="lg" 
              style={{ 
                padding: '12px 32px', 
                fontSize: '16px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                border: 'none'
              }}
              onClick={() => setIsLoading(true)}
            >
              Começar Agora
              <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px' 
          }}>
            {stats.map((stat) => (
              <Card key={stat.label} style={{ 
                textAlign: 'center', 
                padding: '32px 24px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px auto' 
                }}>
                  <stat.icon style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1E293B', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: '#64748B' }}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}>
              Nosso Portfólio de Marcas
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
              Acesse múltiplas marcas educacionais premium através de uma plataforma unificada
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px' 
          }}>
            {brands.map((brand) => (
              <Card 
                key={brand.name} 
                style={{ 
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ height: '4px', background: brand.color }} />
                <CardHeader>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '32px' }}>{brand.icon}</span>
                    <div>
                      <CardTitle style={{ fontSize: '20px', color: '#1E293B' }}>{brand.name}</CardTitle>
                      <CardDescription style={{ color: '#64748B' }}>{brand.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div style={{ marginBottom: '16px' }}>
                    {brand.features.map((feature) => (
                      <div key={feature} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        marginBottom: '8px' 
                      }}>
                        <CheckCircle style={{ width: '16px', height: '16px', color: '#10B981' }} />
                        <span style={{ fontSize: '14px', color: '#475569' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '12px 16px',
                    backgroundColor: '#F1F5F9',
                    borderRadius: '8px'
                  }}>
                    <span style={{ fontSize: '14px', color: '#64748B' }}>Comissão</span>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981' }}>20%</span>
                  </div>
                </CardContent>
              </Card>
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