'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, Play, Pause, BarChart3, TrendingUp, DollarSign, Users, Target, MapPin, Building2, Calculator, Presentation, FileText, Share2 } from "lucide-react"
import Link from "next/link"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)

  // Mock data - in real implementation, this would come from planning state
  const planningData = {
    territory: {
      name: 'Alto Poder Aquisitivo',
      regions: 'SP, RJ, DF',
      investment: 60000,
      marketSize: 2500000,
      competition: 'Alta'
    },
    businessMix: {
      b2b: 60,
      b2b2c: 25,
      b2s: 10,
      b2s2c: 4,
      b2c: 1
    },
    leadPackage: {
      name: 'Avançado',
      leads: 20,
      cost: 30000,
      commission: 22
    },
    projections: {
      pessimistic: {
        monthlyRevenue: 45000,
        annualRevenue: 540000,
        roi: 54,
        payback: 18
      },
      realistic: {
        monthlyRevenue: 78000,
        annualRevenue: 936000,
        roi: 104,
        payback: 11
      },
      optimistic: {
        monthlyRevenue: 125000,
        annualRevenue: 1500000,
        roi: 167,
        payback: 7
      }
    }
  }

  const slides = [
    {
      id: 1,
      title: "Better Sell Franchise",
      subtitle: "Proposta de Investimento Personalizada",
      type: "cover",
      content: (
        <div style={{ textAlign: 'center', padding: '80px 40px' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
            borderRadius: '24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 32px auto',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '48px' }}>B</span>
          </div>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            color: 'transparent' 
          }}>
            Better Sell Franchise
          </h1>
          <p style={{ fontSize: '24px', color: '#64748B', marginBottom: '32px' }}>
            Proposta de Investimento Personalizada
          </p>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#3B82F6'
          }}>
            <Presentation style={{ width: '20px', height: '20px' }} />
            Território: {planningData.territory.name}
          </div>
          <div style={{ marginTop: '48px', color: '#64748B', fontSize: '14px' }}>
            © 2024 Better Tech • Q1 2026 Launch
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Análise Territorial",
      type: "content",
      content: (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '32px', color: '#1E293B' }}>
            Análise Territorial Selecionada
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
            <Card style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <MapPin style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {planningData.territory.name}
                  </h3>
                  <p style={{ color: '#64748B', margin: 0 }}>{planningData.territory.regions}</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <span style={{ color: '#64748B', fontSize: '14px' }}>Tamanho do Mercado</span>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
                    {(planningData.territory.marketSize / 1000000).toFixed(1)}M profissionais
                  </p>
                </div>
                <div>
                  <span style={{ color: '#64748B', fontSize: '14px' }}>Nível de Concorrência</span>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
                    {planningData.territory.competition}
                  </p>
                </div>
                <div>
                  <span style={{ color: '#64748B', fontSize: '14px' }}>Investimento Inicial</span>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#10B981' }}>
                    R$ {planningData.territory.investment.toLocaleString()}
                  </p>
                </div>
              </div>
            </Card>

            <Card style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                Por que este território?
              </h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Alto potencial de mercado com {(planningData.territory.marketSize / 1000000).toFixed(1)}M profissionais</li>
                <li>Região com alta demanda por educação corporativa</li>
                <li>Empresas com orçamento para treinamento e desenvolvimento</li>
                <li>Proximidade com centros de negócios e corporações</li>
                <li>Rede de networking empresarial estabelecida</li>
              </ul>
            </Card>
          </div>

          <div style={{ 
            padding: '24px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#10B981' }}>
              Estratégia Territorial Recomendada
            </h4>
            <p style={{ margin: 0, color: '#64748B' }}>
              Foco em grandes corporações, parcerias estratégicas com RH e expansão gradual para PMEs do setor de serviços
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Modelo de Negócio Estratégico",
      type: "content",
      content: (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '32px', color: '#1E293B' }}>
            Mix de Negócios Otimizado
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
            {/* Business Mix Chart Placeholder */}
            <Card style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                Distribuição Estratégica
              </h3>
              <div style={{ 
                height: '250px', 
                background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                fontSize: '14px',
                marginBottom: '24px'
              }}>
                Gráfico de Pizza - Mix de Negócios
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10B981' }}>
                  {planningData.businessMix.b2b + planningData.businessMix.b2b2c}% Foco B2B
                </div>
                <p style={{ color: '#64748B', margin: 0 }}>Alta prioridade estratégica</p>
              </div>
            </Card>

            {/* Business Models Breakdown */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                Modelos de Receita
              </h3>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { type: 'B2B', percentage: planningData.businessMix.b2b, priority: 'Alta', color: '#10B981' },
                  { type: 'B2B2C', percentage: planningData.businessMix.b2b2c, priority: 'Alta', color: '#3B82F6' },
                  { type: 'B2S', percentage: planningData.businessMix.b2s, priority: 'Média', color: '#8B5CF6' },
                  { type: 'B2S2C', percentage: planningData.businessMix.b2s2c, priority: 'Média', color: '#F59E0B' },
                  { type: 'B2C', percentage: planningData.businessMix.b2c, priority: 'Baixa', color: '#64748B' }
                ].map((model) => (
                  <div key={model.type} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: 'white',
                    border: `1px solid ${model.color}20`,
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: model.color 
                      }} />
                      <span style={{ fontWeight: '600' }}>{model.type}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{model.percentage}%</div>
                      <div style={{ fontSize: '12px', color: model.color }}>
                        {model.priority} Prioridade
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '12px'
          }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#3B82F6' }}>
              Estratégia de Execução
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', fontSize: '14px' }}>
              <div>
                <strong>Ano 1:</strong> Foco em B2B direto para estabelecer base de clientes corporativos
              </div>
              <div>
                <strong>Ano 2:</strong> Expansão B2B2C através de parcerias estratégicas
              </div>
              <div>
                <strong>Ano 3+:</strong> Diversificação para B2S e otimização do mix
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Projeções Financeiras",
      type: "content",
      content: (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '32px', color: '#1E293B' }}>
            Cenários Financeiros
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {[
              { 
                scenario: 'Pessimista', 
                color: '#EF4444', 
                data: planningData.projections.pessimistic,
                description: 'Cenário conservador com baixa performance inicial'
              },
              { 
                scenario: 'Realista', 
                color: '#F59E0B', 
                data: planningData.projections.realistic,
                description: 'Projeção baseada em performance média do mercado'
              },
              { 
                scenario: 'Otimista', 
                color: '#10B981', 
                data: planningData.projections.optimistic,
                description: 'Cenário com execução excelente e mercado favorável'
              }
            ].map((proj) => (
              <Card key={proj.scenario} style={{ 
                border: `2px solid ${proj.color}20`,
                background: `${proj.color}05`,
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: proj.color 
                  }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                    {proj.scenario}
                  </h3>
                </div>
                
                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '20px' }}>
                  {proj.description}
                </p>
                
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>Receita Mensal</span>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: proj.color, margin: 0 }}>
                      R$ {proj.data.monthlyRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', color: '#64748B' }}>Receita Anual</span>
                    <p style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>
                      R$ {proj.data.annualRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>ROI</span>
                      <p style={{ fontSize: '16px', fontWeight: 'bold', color: proj.color, margin: 0 }}>
                        {proj.data.roi}%
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Payback</span>
                      <p style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>
                        {proj.data.payback} meses
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Investment Summary */}
          <Card style={{ 
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
              Resumo do Investimento
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '24px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Investimento Inicial</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6' }}>
                  R$ {(planningData.territory.investment + planningData.leadPackage.cost).toLocaleString()}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Pacote de Leads</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B5CF6' }}>
                  {planningData.leadPackage.name}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Comissão</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F59E0B' }}>
                  {planningData.leadPackage.commission}%
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>ROI Realista</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10B981' }}>
                  {planningData.projections.realistic.roi}%
                </div>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 5,
      title: "Próximos Passos",
      type: "content",
      content: (
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '32px', color: '#1E293B' }}>
            Plano de Implementação
          </h2>
          
          <div style={{ display: 'grid', gap: '24px', marginBottom: '40px' }}>
            {[
              {
                phase: 'Fase 1: Preparação',
                duration: '30 dias',
                color: '#3B82F6',
                items: [
                  'Assinatura do contrato de franquia',
                  'Análise de due diligence financeira',
                  'Treinamento inicial (10 dias)',
                  'Setup do CRM e sistemas'
                ]
              },
              {
                phase: 'Fase 2: Lançamento',
                duration: '60 dias',
                color: '#8B5CF6',
                items: [
                  'Início da operação com leads',
                  'Primeiras campanhas B2B',
                  'Networking e prospecção ativa',
                  'Acompanhamento semanal'
                ]
              },
              {
                phase: 'Fase 3: Crescimento',
                duration: '90+ dias',
                color: '#10B981',
                items: [
                  'Otimização do mix de negócios',
                  'Expansão de parcerias B2B2C',
                  'Análise de performance mensal',
                  'Planejamento de expansão territorial'
                ]
              }
            ].map((phase, index) => (
              <Card key={phase.phase} style={{ 
                padding: '24px',
                border: `2px solid ${phase.color}20`,
                background: `${phase.color}05`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px',
                    background: phase.color,
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
                      {phase.phase}
                    </h3>
                    <p style={{ color: '#64748B', margin: 0, fontSize: '14px' }}>
                      {phase.duration}
                    </p>
                  </div>
                </div>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6', margin: 0 }}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div style={{ 
            padding: '32px',
            background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
            borderRadius: '16px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              Ready to Start?
            </h3>
            <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.9 }}>
              Sua jornada como franqueado Better Sell começa agora. 
              Nossa meta é ter você operacional e lucrativo nos primeiros 90 dias.
            </p>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              🎯 Meta: Q1 2026 Launch
            </div>
          </div>
        </div>
      )
    }
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // 5 seconds per slide
    }
    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: presentationMode ? '#1E293B' : 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)' 
    }}>
      {/* Header */}
      {!presentationMode && (
        <header style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(20px)', 
          borderBottom: '1px solid rgba(59, 130, 246, 0.1)', 
          position: 'sticky', 
          top: 0, 
          zIndex: 50 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
                  <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Investment Presentation</p>
                </div>
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', color: '#64748B' }}>
                  {currentSlide + 1} / {slides.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause style={{ width: '16px', height: '16px' }} /> : <Play style={{ width: '16px', height: '16px' }} />}
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPresentationMode(!presentationMode)}
                >
                  <Presentation style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  {presentationMode ? 'Exit' : 'Present'}
                </Button>
                <Button size="sm">
                  <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Export PDF
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Presentation Content */}
      <div style={{ 
        maxWidth: presentationMode ? '100%' : '1200px', 
        margin: '0 auto', 
        padding: presentationMode ? '0' : '40px 24px'
      }}>
        <Card style={{ 
          minHeight: presentationMode ? '100vh' : '700px',
          background: 'white',
          borderRadius: presentationMode ? '0' : '16px',
          boxShadow: presentationMode ? 'none' : '0 20px 40px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Slide Content */}
          <div style={{ minHeight: presentationMode ? '100vh' : '700px', display: 'flex', flexDirection: 'column' }}>
            {slides[currentSlide]?.content}
          </div>

          {/* Navigation Dots */}
          {!presentationMode && (
            <div style={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === index ? '#3B82F6' : '#E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          )}

          {/* Slide Navigation */}
          {!presentationMode && (
            <div style={{ 
              position: 'absolute', 
              bottom: '20px', 
              right: '20px',
              display: 'flex',
              gap: '8px'
            }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                disabled={currentSlide === slides.length - 1}
              >
                →
              </Button>
            </div>
          )}
        </Card>

        {/* Actions */}
        {!presentationMode && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '32px',
            padding: '24px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
          }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                Sua Proposta Personalizada
              </h3>
              <p style={{ color: '#64748B', margin: 0 }}>
                Baseada nas suas escolhas de território, modelo de negócio e pacote de leads
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="outline">
                <Share2 style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Compartilhar
              </Button>
              <Button variant="outline">
                <FileText style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Salvar Rascunho
              </Button>
              <Link href="/planning">
                <Button>
                  Ajustar Parâmetros
                  <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Presentation Mode Keyboard Shortcuts */}
      {presentationMode && (
        <div style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '12px'
        }}>
          ← → Arrow keys to navigate • ESC to exit
        </div>
      )}
    </div>
  )
}