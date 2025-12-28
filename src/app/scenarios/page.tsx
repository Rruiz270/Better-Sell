'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, TrendingDown, Calculator, BarChart3, DollarSign, Users, Target, Sliders, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Scenarios() {
  const [selectedScenario, setSelectedScenario] = useState('realistic')
  const [customParams, setCustomParams] = useState({
    conversionRate: 16,
    avgDealSize: 22000,
    leadsPerMonth: 440,
    operationalCosts: 8000,
    marketGrowth: 12
  })

  const territories = {
    high: { name: 'Alto Poder Aquisitivo', investment: 60000, regions: 'SP, RJ, DF' },
    medium: { name: 'Médio Poder Aquisitivo', investment: 50000, regions: 'PR, SC, MG, BA' },
    low: { name: 'Baixo Poder Aquisitivo', investment: 40000, regions: 'Norte, Interior NE' }
  }

  const scenarios = {
    pessimistic: {
      name: 'Pessimista',
      description: 'Cenário conservador com challenges de mercado',
      color: '#EF4444',
      icon: TrendingDown,
      params: {
        conversionRate: 8,
        avgDealSize: 18000,
        leadsPerMonth: 440,
        operationalCosts: 12000,
        marketGrowth: 5
      },
      assumptions: [
        'Mercado competitivo com alta resistência',
        'Ciclo de vendas 40% mais longo',
        'Custos operacionais elevados',
        'Rotatividade alta de leads'
      ]
    },
    realistic: {
      name: 'Realista',
      description: 'Projeção baseada em dados de mercado',
      color: '#F59E0B',
      icon: TrendingUp,
      params: {
        conversionRate: 16,
        avgDealSize: 22000,
        leadsPerMonth: 440,
        operationalCosts: 8000,
        marketGrowth: 12
      },
      assumptions: [
        'Performance alinhada com mercado',
        'Crescimento gradual e sustentável',
        'Custos controlados',
        'Mix de clientes equilibrado'
      ]
    },
    optimistic: {
      name: 'Otimista',
      description: 'Cenário com excelente execução',
      color: '#10B981',
      icon: TrendingUp,
      params: {
        conversionRate: 28,
        avgDealSize: 28000,
        leadsPerMonth: 440,
        operationalCosts: 6000,
        marketGrowth: 25
      },
      assumptions: [
        'Execução excepcional da estratégia',
        'Network forte e referências',
        'Eficiência operacional otimizada',
        'Expansão acelerada'
      ]
    },
    custom: {
      name: 'Personalizado',
      description: 'Ajuste seus próprios parâmetros',
      color: '#8B5CF6',
      icon: Sliders,
      params: customParams,
      assumptions: [
        'Parâmetros definidos pelo usuário',
        'Cenário customizado',
        'Variáveis ajustáveis',
        'Simulação personalizada'
      ]
    }
  }

  const calculateProjections = (scenarioParams: any, territory: any) => {
    const monthlyLeads = scenarioParams.leadsPerMonth
    const conversionRate = scenarioParams.conversionRate / 100
    const monthlyDeals = monthlyLeads * conversionRate
    const monthlyRevenue = monthlyDeals * scenarioParams.avgDealSize
    const franchiseShare = monthlyRevenue * 0.25 // 25% commission
    const netMonthlyRevenue = franchiseShare - scenarioParams.operationalCosts
    const annualRevenue = netMonthlyRevenue * 12
    const totalInvestment = territory.investment + 30000 // Adding lead package cost
    const roi = (annualRevenue / totalInvestment) * 100
    const paybackMonths = totalInvestment / netMonthlyRevenue

    return {
      monthlyLeads,
      monthlyDeals: Math.round(monthlyDeals),
      monthlyRevenue,
      franchiseShare,
      netMonthlyRevenue,
      annualRevenue,
      totalInvestment,
      roi,
      paybackMonths,
      conversionRate: scenarioParams.conversionRate
    }
  }

  const projections = Object.entries(territories).map(([key, territory]) => ({
    territory: key,
    name: territory.name,
    ...calculateProjections(scenarios[selectedScenario as keyof typeof scenarios].params, territory)
  }))

  const selectedScenarioData = scenarios[selectedScenario as keyof typeof scenarios]

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
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
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
                <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>Scenario Modeling</p>
              </div>
            </Link>
            
            <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/planning" style={{ 
                color: '#64748B', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontWeight: '500'
              }}>
                Back to Planning
              </Link>
              <Link href="/presentation">
                <Button size="sm">
                  View Presentation
                  <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
            Análise de Cenários
          </h2>
          <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>
            Compare diferentes cenários financeiros e ajuste parâmetros para simular diversos contextos de mercado
          </p>
        </div>

        {/* Scenario Selector */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
            Selecione um Cenário
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {Object.entries(scenarios).map(([key, scenario]) => (
              <Card 
                key={key}
                style={{ 
                  border: selectedScenario === key ? `2px solid ${scenario.color}` : '1px solid #E2E8F0',
                  background: selectedScenario === key ? `${scenario.color}08` : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '12px'
                }}
                onClick={() => setSelectedScenario(key)}
              >
                <CardContent style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px',
                      background: scenario.color,
                      borderRadius: '10px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <scenario.icon style={{ width: '20px', height: '20px', color: 'white' }} />
                    </div>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>
                      {scenario.name}
                    </h4>
                  </div>
                  <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                    {scenario.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Parameters */}
        {selectedScenario === 'custom' && (
          <Card style={{ marginBottom: '40px', padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
              Ajustar Parâmetros Personalizados
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {Object.entries(customParams).map(([key, value]) => {
                const labels = {
                  conversionRate: 'Taxa de Conversão (%)',
                  avgDealSize: 'Ticket Médio (R$)',
                  leadsPerMonth: 'Leads por Mês',
                  operationalCosts: 'Custos Operacionais (R$)',
                  marketGrowth: 'Crescimento do Mercado (%)'
                }
                return (
                  <div key={key}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      marginBottom: '8px',
                      color: '#374151' 
                    }}>
                      {labels[key as keyof typeof labels]}
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setCustomParams({
                        ...customParams,
                        [key]: parseFloat(e.target.value) || 0
                      })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>
                )
              })}
            </div>
            <Button 
              style={{ marginTop: '24px' }}
              onClick={() => {
                // Trigger recalculation
                setSelectedScenario('custom')
              }}
            >
              <RefreshCw style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Atualizar Projeções
            </Button>
          </Card>
        )}

        {/* Scenario Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', marginBottom: '40px' }}>
          
          {/* Scenario Info */}
          <Card style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
              {selectedScenarioData.name}
            </h3>
            <p style={{ color: '#64748B', marginBottom: '24px' }}>
              {selectedScenarioData.description}
            </p>
            
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
              Premissas do Cenário:
            </h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
              {selectedScenarioData.assumptions.map((assumption, index) => (
                <li key={index} style={{ marginBottom: '8px', fontSize: '14px' }}>
                  {assumption}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                Parâmetros Principais:
              </h4>
              <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Taxa de Conversão:</span>
                  <strong>{selectedScenarioData.params.conversionRate}%</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Ticket Médio:</span>
                  <strong>R$ {selectedScenarioData.params.avgDealSize.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Leads/Mês:</span>
                  <strong>{selectedScenarioData.params.leadsPerMonth}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Custos Operacionais:</span>
                  <strong>R$ {selectedScenarioData.params.operationalCosts.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </Card>

          {/* Projections Chart Placeholder */}
          <Card style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
              Projeção Anual de Receita
            </h3>
            <div style={{ 
              height: '300px', 
              background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              fontSize: '16px',
              marginBottom: '24px'
            }}>
              Gráfico de Crescimento Mensal
              <br />
              <span style={{ fontSize: '14px' }}>
                Cenário: {selectedScenarioData.name} | ROI Médio: {Math.round(projections.reduce((acc, p) => acc + p.roi, 0) / projections.length)}%
              </span>
            </div>
          </Card>
        </div>

        {/* Territory Comparison */}
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
            Comparação por Território
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {projections.map((proj) => (
              <Card key={proj.territory} style={{ 
                padding: '24px',
                border: `2px solid ${selectedScenarioData.color}20`,
                background: `${selectedScenarioData.color}05`
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {proj.name}
                  </h4>
                  <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
                    Investimento: R$ {proj.totalInvestment.toLocaleString()}
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Leads/Mês:</span>
                      <p style={{ fontWeight: '600', margin: 0 }}>{proj.monthlyLeads}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Conversão:</span>
                      <p style={{ fontWeight: '600', margin: 0 }}>{proj.conversionRate}%</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Vendas/Mês:</span>
                      <p style={{ fontWeight: '600', margin: 0 }}>{proj.monthlyDeals}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Receita Bruta:</span>
                      <p style={{ fontWeight: '600', margin: 0 }}>R$ {Math.round(proj.franchiseShare).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Receita Líquida Mensal:</span>
                      <p style={{ fontWeight: 'bold', fontSize: '20px', color: selectedScenarioData.color, margin: '4px 0' }}>
                        R$ {Math.round(proj.netMonthlyRevenue).toLocaleString()}
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '14px' }}>
                      <div>
                        <span style={{ color: '#64748B' }}>ROI Anual:</span>
                        <p style={{ fontWeight: 'bold', color: selectedScenarioData.color, margin: 0 }}>
                          {proj.roi.toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <span style={{ color: '#64748B' }}>Payback:</span>
                        <p style={{ fontWeight: '600', margin: 0 }}>
                          {proj.paybackMonths.toFixed(1)} meses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          marginTop: '48px',
          display: 'flex', 
          justifyContent: 'center',
          gap: '16px' 
        }}>
          <Link href="/planning">
            <Button variant="outline">
              Ajustar Parâmetros
            </Button>
          </Link>
          <Link href="/presentation">
            <Button>
              Gerar Apresentação
              <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}