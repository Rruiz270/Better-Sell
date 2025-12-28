'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, MapPin, Building2, Calculator, BarChart3, TrendingUp, DollarSign, Users, Target, Check } from "lucide-react"
import Link from "next/link"

interface PlanningData {
  territory?: string
  businessMix: {
    b2b: number
    b2b2c: number
    b2s: number
    b2s2c: number
    b2c: number
  }
  leadPackage?: string
  scenarios: {
    pessimistic: any
    realistic: any
    optimistic: any
  }
}

export default function Planning() {
  const [currentStep, setCurrentStep] = useState(1)
  const [planningData, setPlanningData] = useState<PlanningData>({
    businessMix: {
      b2b: 60,
      b2b2c: 25,
      b2s: 10,
      b2s2c: 4,
      b2c: 1
    },
    scenarios: {
      pessimistic: {},
      realistic: {},
      optimistic: {}
    }
  })

  const territories = [
    { 
      id: 'high',
      name: 'Alto Poder Aquisitivo', 
      regions: 'SP, RJ, DF', 
      investment: 60000, 
      marketSize: 2500000,
      avgTicket: 2800,
      competition: 'Alta',
      leadCost: 45,
      conversionRate: { pessimistic: 0.08, realistic: 0.14, optimistic: 0.22 }
    },
    { 
      id: 'medium',
      name: 'Médio Poder Aquisitivo', 
      regions: 'PR, SC, MG, BA', 
      investment: 50000, 
      marketSize: 1800000,
      avgTicket: 2200,
      competition: 'Média',
      leadCost: 35,
      conversionRate: { pessimistic: 0.10, realistic: 0.16, optimistic: 0.25 }
    },
    { 
      id: 'low',
      name: 'Baixo Poder Aquisitivo', 
      regions: 'Norte e Interior Nordeste', 
      investment: 40000, 
      marketSize: 1200000,
      avgTicket: 1800,
      competition: 'Baixa',
      leadCost: 25,
      conversionRate: { pessimistic: 0.12, realistic: 0.18, optimistic: 0.28 }
    }
  ]

  const leadPackages = [
    { 
      id: 'basic', 
      name: 'Básico', 
      leads: 10, 
      cost: 0, 
      commission: 25,
      description: 'Pacote padrão incluído'
    },
    { 
      id: 'advanced', 
      name: 'Avançado', 
      leads: 20, 
      cost: 30000, 
      commission: 22,
      description: '2x mais leads'
    },
    { 
      id: 'premium', 
      name: 'Premium', 
      leads: 40, 
      cost: 50000, 
      commission: 20,
      description: '4x mais leads'
    }
  ]

  const businessModels = [
    {
      type: 'B2B',
      description: 'Vendas diretas para empresas',
      avgDeal: 25000,
      cycle: 67,
      priority: 'Alta'
    },
    {
      type: 'B2B2C',
      description: 'Parcerias com empresas',
      avgDeal: 15000,
      cycle: 45,
      priority: 'Alta'
    },
    {
      type: 'B2S',
      description: 'Vendas para escolas',
      avgDeal: 35000,
      cycle: 90,
      priority: 'Média'
    },
    {
      type: 'B2S2C',
      description: 'Parcerias com escolas',
      avgDeal: 8000,
      cycle: 37,
      priority: 'Média'
    },
    {
      type: 'B2C',
      description: 'Vendas diretas',
      avgDeal: 2500,
      cycle: 11,
      priority: 'Baixa'
    }
  ]

  const calculateProjections = () => {
    const selectedTerritory = territories.find(t => t.id === planningData.territory)
    const selectedPackage = leadPackages.find(p => p.id === planningData.leadPackage)
    
    if (!selectedTerritory || !selectedPackage) return null

    const monthlyLeads = selectedPackage.leads * 22 // working days per month
    const scenarios = ['pessimistic', 'realistic', 'optimistic'] as const

    return scenarios.map(scenario => {
      const conversionRate = selectedTerritory.conversionRate[scenario]
      const monthlyDeals = monthlyLeads * conversionRate
      
      // Calculate weighted average deal value based on business mix
      const avgDealValue = 
        (planningData.businessMix.b2b / 100) * 25000 +
        (planningData.businessMix.b2b2c / 100) * 15000 +
        (planningData.businessMix.b2s / 100) * 35000 +
        (planningData.businessMix.b2s2c / 100) * 8000 +
        (planningData.businessMix.b2c / 100) * 2500

      const monthlyRevenue = monthlyDeals * avgDealValue
      const franchiseShare = monthlyRevenue * (selectedPackage.commission / 100)
      const annualRevenue = franchiseShare * 12
      
      const totalInvestment = selectedTerritory.investment + selectedPackage.cost
      const roi = annualRevenue / totalInvestment
      const paybackMonths = totalInvestment / franchiseShare

      return {
        scenario,
        monthlyLeads,
        conversionRate: conversionRate * 100,
        monthlyDeals: Math.round(monthlyDeals),
        avgDealValue,
        monthlyRevenue,
        franchiseShare,
        annualRevenue,
        totalInvestment,
        roi: roi * 100,
        paybackMonths
      }
    })
  }

  const projections = calculateProjections()

  const steps = [
    {
      number: 1,
      title: 'Análise Territorial',
      icon: MapPin,
      completed: !!planningData.territory
    },
    {
      number: 2,
      title: 'Modelo de Negócio',
      icon: Building2,
      completed: currentStep > 2
    },
    {
      number: 3,
      title: 'Pacote de Leads',
      icon: Target,
      completed: !!planningData.leadPackage
    },
    {
      number: 4,
      title: 'Projeção Financeira',
      icon: Calculator,
      completed: currentStep > 4
    }
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
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Planning Tool</p>
              </div>
            </Link>
            
            {/* Progress Steps */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {steps.map((step, index) => (
                <div key={step.number} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px',
                    borderRadius: '50%',
                    background: step.completed || currentStep === step.number 
                      ? 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)' 
                      : '#E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    {step.completed ? (
                      <Check style={{ width: '16px', height: '16px', color: 'white' }} />
                    ) : (
                      <step.icon style={{ 
                        width: '16px', 
                        height: '16px', 
                        color: currentStep === step.number ? 'white' : '#64748B' 
                      }} />
                    )}
                  </div>
                  <span style={{ 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: step.completed || currentStep === step.number ? '#3B82F6' : '#64748B'
                  }}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Step 1: Territory Selection */}
        {currentStep === 1 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
                Selecione seu Território
              </h2>
              <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                Escolha a região onde você pretende operar sua franquia. Cada território tem características específicas de mercado e investimento.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {territories.map((territory) => (
                <Card 
                  key={territory.id}
                  style={{ 
                    border: planningData.territory === territory.id ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                    background: planningData.territory === territory.id ? 'rgba(59, 130, 246, 0.05)' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: '16px'
                  }}
                  onClick={() => setPlanningData({ ...planningData, territory: territory.id })}
                >
                  <CardHeader>
                    <CardTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{territory.name}</span>
                      <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#10B981' }}>
                        R$ {territory.investment.toLocaleString()}
                      </span>
                    </CardTitle>
                    <p style={{ color: '#64748B', fontSize: '14px' }}>{territory.regions}</p>
                  </CardHeader>
                  <CardContent>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
                      <div>
                        <span style={{ color: '#64748B' }}>Mercado:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>{(territory.marketSize / 1000000).toFixed(1)}M profissionais</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Ticket Médio:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>R$ {territory.avgTicket.toLocaleString()}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Concorrência:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>{territory.competition}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Custo por Lead:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>R$ {territory.leadCost}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                onClick={() => setCurrentStep(2)}
                disabled={!planningData.territory}
                style={{ 
                  padding: '12px 32px',
                  background: planningData.territory ? 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' : '#E2E8F0'
                }}
              >
                Próximo: Modelo de Negócio
                <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Business Model Mix */}
        {currentStep === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
                Configure seu Mix de Negócios
              </h2>
              <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
                Defina como você pretende distribuir seus esforços entre os diferentes modelos de vendas. O foco em B2B e B2B2C gera contratos de maior valor.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
              {/* Business Mix Controls */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>Distribuição de Esforços (%)</h3>
                {businessModels.map((model) => {
                  const key = model.type.toLowerCase().replace('2', '2') as keyof typeof planningData.businessMix
                  return (
                    <div key={model.type} style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600' }}>{model.type}</span>
                        <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>{planningData.businessMix[key]}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={planningData.businessMix[key]}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value)
                          setPlanningData({
                            ...planningData,
                            businessMix: {
                              ...planningData.businessMix,
                              [key]: newValue
                            }
                          })
                        }}
                        style={{ 
                          width: '100%', 
                          height: '8px',
                          borderRadius: '4px',
                          background: '#E2E8F0',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      />
                      <p style={{ fontSize: '12px', color: '#64748B', margin: '4px 0 0 0' }}>
                        {model.description} • Ticket: R$ {model.avgDeal.toLocaleString()} • Ciclo: {model.cycle} dias
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Preview */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>Preview do Mix</h3>
                <Card style={{ padding: '24px' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ 
                      height: '200px', 
                      background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748B',
                      fontSize: '14px'
                    }}>
                      Gráfico de Pizza do Mix de Negócios
                    </div>
                  </div>
                  
                  <div style={{ fontSize: '14px' }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Resumo Estratégico:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div>
                        <span style={{ color: '#64748B' }}>Foco B2B/B2B2C:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>{planningData.businessMix.b2b + planningData.businessMix.b2b2c}%</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Ticket Médio Estimado:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>
                          R$ {Math.round(
                            (planningData.businessMix.b2b / 100) * 25000 +
                            (planningData.businessMix.b2b2c / 100) * 15000 +
                            (planningData.businessMix.b2s / 100) * 35000 +
                            (planningData.businessMix.b2s2c / 100) * 8000 +
                            (planningData.businessMix.b2c / 100) * 2500
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeft style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Voltar: Território
              </Button>
              <Button 
                onClick={() => setCurrentStep(3)}
                style={{ 
                  padding: '12px 32px',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'
                }}
              >
                Próximo: Pacote de Leads
                <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Lead Package Selection */}
        {currentStep === 3 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
                Escolha seu Pacote de Leads
              </h2>
              <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
                Selecione quantos leads você quer receber diariamente. Mais leads significam maior potencial de vendas, mas também maior investimento.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {leadPackages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  style={{ 
                    border: planningData.leadPackage === pkg.id ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                    background: planningData.leadPackage === pkg.id ? 'rgba(59, 130, 246, 0.05)' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    borderRadius: '16px',
                    padding: '24px'
                  }}
                  onClick={() => setPlanningData({ ...planningData, leadPackage: pkg.id })}
                >
                  <CardHeader style={{ padding: 0, marginBottom: '20px' }}>
                    <CardTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{pkg.name}</span>
                      {pkg.cost > 0 && (
                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#F59E0B' }}>
                          +R$ {pkg.cost.toLocaleString()}
                        </span>
                      )}
                    </CardTitle>
                    <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>{pkg.description}</p>
                  </CardHeader>
                  <CardContent style={{ padding: 0 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
                      <div>
                        <span style={{ color: '#64748B' }}>Leads/Dia:</span>
                        <p style={{ fontWeight: '600', margin: 0, fontSize: '20px', color: '#3B82F6' }}>{pkg.leads}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Leads/Mês:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>{pkg.leads * 22}</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Sua Comissão:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>{pkg.commission}%</p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Investimento Extra:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>
                          {pkg.cost > 0 ? `R$ ${pkg.cost.toLocaleString()}` : 'Incluído'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(2)}
              >
                <ArrowLeft style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Voltar: Modelo de Negócio
              </Button>
              <Button 
                onClick={() => setCurrentStep(4)}
                disabled={!planningData.leadPackage}
                style={{ 
                  padding: '12px 32px',
                  background: planningData.leadPackage ? 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' : '#E2E8F0'
                }}
              >
                Ver Projeções Financeiras
                <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Financial Projections */}
        {currentStep === 4 && projections && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
                Projeções Financeiras
              </h2>
              <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
                Baseado nas suas escolhas, aqui estão as projeções financeiras para 3 cenários diferentes de performance.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {projections.map((projection, index) => {
                const colors = ['#EF4444', '#F59E0B', '#10B981']
                const scenarios = ['Pessimista', 'Realista', 'Otimista']
                return (
                  <Card 
                    key={projection.scenario}
                    style={{ 
                      border: `2px solid ${colors[index]}20`,
                      borderRadius: '16px',
                      background: `${colors[index]}05`
                    }}
                  >
                    <CardHeader>
                      <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          borderRadius: '50%', 
                          background: colors[index] 
                        }} />
                        <span>{scenarios[index]}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div style={{ display: 'grid', gap: '16px', fontSize: '14px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <div>
                            <span style={{ color: '#64748B' }}>Leads/Mês:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>{projection.monthlyLeads}</p>
                          </div>
                          <div>
                            <span style={{ color: '#64748B' }}>Conversão:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>{projection.conversionRate.toFixed(1)}%</p>
                          </div>
                          <div>
                            <span style={{ color: '#64748B' }}>Vendas/Mês:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>{projection.monthlyDeals}</p>
                          </div>
                          <div>
                            <span style={{ color: '#64748B' }}>Ticket Médio:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>R$ {projection.avgDealValue.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                          <div>
                            <span style={{ color: '#64748B' }}>Receita Mensal (sua parte):</span>
                            <p style={{ fontWeight: 'bold', fontSize: '20px', color: colors[index], margin: '4px 0' }}>
                              R$ {projection.franchiseShare.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <span style={{ color: '#64748B' }}>Receita Anual:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>R$ {projection.annualRevenue.toLocaleString()}</p>
                          </div>
                          <div style={{ marginTop: '12px' }}>
                            <span style={{ color: '#64748B' }}>ROI Anual:</span>
                            <p style={{ fontWeight: 'bold', color: colors[index], margin: 0 }}>
                              {projection.roi.toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <span style={{ color: '#64748B' }}>Payback:</span>
                            <p style={{ fontWeight: '600', margin: 0 }}>{projection.paybackMonths.toFixed(1)} meses</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(3)}
              >
                <ArrowLeft style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Voltar: Pacote de Leads
              </Button>
              <Link href="/presentation">
                <Button 
                  style={{ 
                    padding: '12px 32px',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'
                  }}
                >
                  Gerar Apresentação
                  <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}