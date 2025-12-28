'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, TrendingUp, MapPin, Building2, Users, Target, BarChart3, DollarSign, Zap, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [selectedTerritory, setSelectedTerritory] = useState('')
  const [currentStep, setCurrentStep] = useState(0)

  const territories = [
    { 
      name: 'Alto Poder Aquisitivo', 
      regions: 'SP, RJ, DF', 
      investment: 'R$ 60.000', 
      marketSize: '2.5M professionals',
      avgTicket: 'R$ 2.800',
      competition: 'Alta',
      id: 'high'
    },
    { 
      name: 'Médio Poder Aquisitivo', 
      regions: 'PR, SC, MG, BA', 
      investment: 'R$ 50.000', 
      marketSize: '1.8M professionals',
      avgTicket: 'R$ 2.200',
      competition: 'Média',
      id: 'medium'
    },
    { 
      name: 'Baixo Poder Aquisitivo', 
      regions: 'Norte e Interior Nordeste', 
      investment: 'R$ 40.000', 
      marketSize: '1.2M professionals',
      avgTicket: 'R$ 1.800',
      competition: 'Baixa',
      id: 'low'
    }
  ]

  const businessModels = [
    {
      type: 'B2B',
      priority: 'Alta',
      description: 'Vendas diretas para empresas',
      revenue: '60% do faturamento',
      avgDeal: 'R$ 25.000',
      cycle: '45-90 dias'
    },
    {
      type: 'B2B2C',
      priority: 'Alta', 
      description: 'Parcerias com empresas para funcionários',
      revenue: '25% do faturamento',
      avgDeal: 'R$ 15.000',
      cycle: '30-60 dias'
    },
    {
      type: 'B2S',
      priority: 'Média',
      description: 'Vendas para escolas e instituições',
      revenue: '10% do faturamento', 
      avgDeal: 'R$ 35.000',
      cycle: '60-120 dias'
    },
    {
      type: 'B2S2C',
      priority: 'Média',
      description: 'Parcerias com escolas para alunos',
      revenue: '4% do faturamento',
      avgDeal: 'R$ 8.000', 
      cycle: '30-45 dias'
    },
    {
      type: 'B2C',
      priority: 'Baixa',
      description: 'Vendas diretas para consumidores',
      revenue: '1% do faturamento',
      avgDeal: 'R$ 2.500',
      cycle: '7-15 dias'
    }
  ]

  const planningSteps = [
    { 
      step: '01',
      title: 'Análise Territorial', 
      description: 'Selecione sua região e analise potencial de mercado',
      icon: MapPin,
      color: '#3B82F6'
    },
    { 
      step: '02', 
      title: 'Modelo de Negócio',
      description: 'Configure mix B2B/B2B2C/B2S com foco estratégico',
      icon: Building2,
      color: '#10B981'
    },
    { 
      step: '03',
      title: 'Projeção Financeira',
      description: 'Modele 3 cenários com ROI de 10 anos',
      icon: Calculator,
      color: '#8B5CF6'
    },
    { 
      step: '04',
      title: 'Apresentação Final',
      description: 'Gere sua proposta personalizada de investimento', 
      icon: BarChart3,
      color: '#F59E0B'
    }
  ]

  const keyMetrics = [
    { title: 'Investment Range', value: 'R$ 40k - R$ 60k', description: 'Based on territory', icon: DollarSign },
    { title: 'Revenue Split', value: '25% Franchise', description: '75% Franqueadora', icon: TrendingUp },
    { title: 'Lead Packages', value: '10-40 leads/day', description: 'Scalable plans', icon: Target },
    { title: 'Target Launch', value: '5 Franchisees', description: 'Q1 2026', icon: Users },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)' }}>
      {/* Header */}
      <header style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)', 
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
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
              <div>
                <h1 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  WebkitBackgroundClip: 'text', 
                  backgroundClip: 'text', 
                  color: 'transparent',
                  margin: 0
                }}>
                  Better Sell
                </h1>
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Franchise Planning Tool</p>
              </div>
            </div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/planning" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Planning
              </Link>
              <Link href="/scenarios" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Scenarios
              </Link>
              <Link href="/presentation" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Presentation
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        padding: '80px 24px 60px 24px', 
        textAlign: 'center',
        background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 45%, rgba(248, 250, 252, 1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#8B5CF6'
          }}>
            <Calculator style={{ width: '16px', height: '16px' }} />
            Franchise Investment Planner
          </div>
          
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '24px', 
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#1E293B'
          }}>
            Plan Your
            <span style={{ 
              background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent' 
            }}> Better Sell </span>
            Franchise
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#64748B', 
            marginBottom: '40px', 
            maxWidth: '650px', 
            margin: '0 auto 40px auto',
            lineHeight: '1.6' 
          }}>
            Model your franchise investment with <strong>3 financial scenarios</strong>, territory analysis, and 
            <strong> B2B-focused revenue planning</strong> for Q1 2026 launch.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button 
              onClick={() => setCurrentStep(1)}
              style={{
                padding: '16px 32px',
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
              <PlayCircle style={{ width: '20px', height: '20px' }} />
              Start Planning
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={{
              padding: '16px 32px',
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
              View Demo Results
              <BarChart3 style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section style={{ 
        padding: '60px 24px', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(59, 130, 246, 0.02) 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px' 
          }}>
            {keyMetrics.map((metric, index) => {
              const gradients = [
                'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
              ]
              return (
                <Card key={metric.title} style={{ 
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}>
                  <CardContent style={{ padding: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748B', margin: '0 0 8px 0' }}>
                          {metric.title}
                        </p>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', margin: '0 0 8px 0' }}>
                          {metric.value}
                        </p>
                        <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>
                          {metric.description}
                        </p>
                      </div>
                      <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        background: gradients[index],
                        borderRadius: '12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: `0 6px 20px ${gradients[index].includes('#3B82F6') ? 'rgba(59, 130, 246, 0.3)' : gradients[index].includes('#10B981') ? 'rgba(16, 185, 129, 0.3)' : gradients[index].includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                      }}>
                        <metric.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section style={{ 
        padding: '80px 24px', 
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: '#1E293B'
            }}>
              Franchise Planning Process
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
              Interactive 4-step planning tool to model your investment and generate a personalized franchise proposal
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {planningSteps.map((step, index) => (
              <Card 
                key={step.step}
                style={{ 
                  background: currentStep === index + 1 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)' : 'white',
                  border: currentStep === index + 1 ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentStep(index + 1)}
              >
                <CardContent style={{ padding: 0, textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: step.color,
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px auto',
                    boxShadow: `0 8px 25px ${step.color}40`
                  }}>
                    <step.icon style={{ width: '36px', height: '36px', color: 'white' }} />
                  </div>
                  <div style={{ 
                    fontSize: '32px', 
                    fontWeight: 'bold', 
                    color: step.color, 
                    marginBottom: '16px' 
                  }}>
                    {step.step}
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#1E293B', 
                    marginBottom: '12px' 
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.5' }}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Priority */}
      <section style={{ 
        padding: '80px 24px', 
        background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: '#1E293B'
            }}>
              Revenue Model Priority
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
              Strategic focus on B2B and B2B2C with reduced B2C emphasis for higher-value, longer-term contracts
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {businessModels.map((model, index) => {
              const priorityColors = {
                'Alta': '#10B981',
                'Média': '#F59E0B', 
                'Baixa': '#64748B'
              }
              return (
                <Card 
                  key={model.type}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: `2px solid ${priorityColors[model.priority as keyof typeof priorityColors]}20`,
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent style={{ padding: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        color: '#1E293B',
                        margin: 0
                      }}>
                        {model.type}
                      </h3>
                      <div style={{
                        padding: '4px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: `${priorityColors[model.priority as keyof typeof priorityColors]}20`,
                        color: priorityColors[model.priority as keyof typeof priorityColors]
                      }}>
                        {model.priority} Prioridade
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>
                      {model.description}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '12px' }}>
                      <div>
                        <span style={{ color: '#64748B' }}>Revenue Share:</span>
                        <p style={{ fontWeight: '600', color: '#1E293B', margin: 0 }}>{model.revenue}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Avg Deal:</span>
                        <p style={{ fontWeight: '600', color: '#1E293B', margin: 0 }}>{model.avgDeal}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Sales Cycle:</span>
                        <p style={{ fontWeight: '600', color: '#1E293B', margin: 0 }}>{model.cycle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
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
            Ready to Plan Your Franchise Investment?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
            Use our interactive planning tool to model scenarios and generate your personalized investment proposal for Q1 2026 launch.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              size="lg" 
              style={{ 
                backgroundColor: 'white', 
                color: '#3B82F6', 
                padding: '16px 32px',
                fontSize: '16px'
              }}
              onClick={() => setCurrentStep(1)}
            >
              Start Planning Tool
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              style={{ 
                borderColor: 'white', 
                color: 'white', 
                padding: '16px 32px',
                fontSize: '16px'
              }}
            >
              Download Framework
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
                Franchise investment planning platform for the Better Tech ecosystem.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Planning Tools</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/planning" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Territory Analysis</Link>
                <Link href="/scenarios" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Financial Scenarios</Link>
                <Link href="/presentation" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Investment Presentation</Link>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Resources</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Franchise Guide</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Financial Templates</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Market Research</Link>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>Better Tech</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>About Us</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link href="#" style={{ color: '#94A3B8', fontSize: '14px', textDecoration: 'none' }}>Terms of Use</Link>
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
              © 2024 Better Tech. All rights reserved. Franchise planning tool for Q1 2026 launch.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}