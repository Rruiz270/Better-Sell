'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MapPin, 
  Users, 
  School, 
  TrendingUp,
  Target,
  Building,
  Calendar,
  FileText,
  Download,
  Plus,
  BarChart3,
  PieChart
} from "lucide-react"
import Link from "next/link"

export default function BusinessPlan() {
  const [selectedState, setSelectedState] = useState('SP')
  const [selectedCity, setSelectedCity] = useState('São Paulo')
  const [targetMarket, setTargetMarket] = useState({
    schools: 150,
    corporations: 75,
    individuals: 500
  })
  const [competitorAnalysis, setCompetitorAnalysis] = useState({
    directCompetitors: 3,
    marketShare: 15,
    averagePrice: 2800
  })
  const [marketingStrategy, setMarketingStrategy] = useState({
    digitalMarketing: 40,
    partnerships: 30,
    events: 20,
    referrals: 10
  })

  const brazilianStates = [
    { code: 'SP', name: 'São Paulo', cities: ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto'] },
    { code: 'RJ', name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Nova Iguaçu'] },
    { code: 'MG', name: 'Minas Gerais', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'] },
    { code: 'RS', name: 'Rio Grande do Sul', cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas'] },
    { code: 'PR', name: 'Paraná', cities: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa'] },
    { code: 'SC', name: 'Santa Catarina', cities: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó'] },
    { code: 'BA', name: 'Bahia', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari'] },
    { code: 'GO', name: 'Goiás', cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde'] }
  ]

  const getCurrentState = () => brazilianStates.find(state => state.code === selectedState)
  const getCurrentCities = () => getCurrentState()?.cities || []

  const calculateMarketPotential = () => {
    const totalTargets = targetMarket.schools + targetMarket.corporations + targetMarket.individuals
    const estimatedConversion = totalTargets * 0.08 // 8% conversion rate
    const averageTicket = 2500
    const annualRevenue = estimatedConversion * averageTicket * 2 // 2 sales per client per year
    const commission = annualRevenue * 0.20
    
    return {
      totalTargets,
      estimatedConversion,
      annualRevenue,
      commission,
      monthlyCommission: commission / 12
    }
  }

  const marketPotential = calculateMarketPotential()

  const generateBusinessPlan = () => {
    const businessPlan = {
      executiveSummary: {
        location: `${selectedCity}, ${getCurrentState()?.name}`,
        marketPotential: marketPotential,
        targetMarket,
        competitorAnalysis,
        marketingStrategy
      },
      financialProjections: {
        year1: {
          revenue: marketPotential.annualRevenue * 0.6, // 60% in first year
          commission: marketPotential.commission * 0.6,
          costs: 96000, // 8k per month
          profit: (marketPotential.commission * 0.6) - 96000
        },
        year2: {
          revenue: marketPotential.annualRevenue * 0.85, // 85% in second year
          commission: marketPotential.commission * 0.85,
          costs: 108000, // 9k per month (inflation)
          profit: (marketPotential.commission * 0.85) - 108000
        },
        year3: {
          revenue: marketPotential.annualRevenue,
          commission: marketPotential.commission,
          costs: 120000, // 10k per month
          profit: marketPotential.commission - 120000
        }
      },
      actionPlan: {
        month1: ['Registro da franquia', 'Setup inicial', 'Treinamento Better Tech'],
        month2: ['Lançamento marketing digital', 'Primeiros contatos B2B', 'Eventos de networking'],
        month3: ['Parcerias estratégicas', 'Primeiras vendas', 'Otimização processos'],
        month6: ['Expansão equipe', 'Diversificação produtos', 'Análise performance'],
        month12: ['Avaliação anual', 'Planejamento expansão', 'Renovação contratos']
      }
    }

    const blob = new Blob([JSON.stringify(businessPlan, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `better-sell-business-plan-${selectedCity}-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #E2E8F0', 
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Link href="/" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                marginBottom: '8px'
              }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>B</span>
                </div>
                <span style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  WebkitBackgroundClip: 'text', 
                  backgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                  Better Sell
                </span>
              </Link>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
                Plano de Negócios
              </h1>
              <p style={{ color: '#64748B', margin: 0 }}>
                Analise mercado, concorrência e oportunidades para sua região
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button variant="outline" onClick={generateBusinessPlan}>
                <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Gerar Plano
              </Button>
              <Link href="/planning">
                <Button variant="outline">
                  <BarChart3 style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Financeiro
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px' }}>
        
        {/* Location Selection */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin style={{ width: '20px', height: '20px' }} />
              Seleção de Território
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Estado
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value)
                    const newState = brazilianStates.find(state => state.code === e.target.value)
                    if (newState && newState.cities.length > 0) {
                      setSelectedCity(newState.cities[0])
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  {brazilianStates.map(state => (
                    <option key={state.code} value={state.code}>{state.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Cidade
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  {getCurrentCities().map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ 
              marginTop: '16px', 
              padding: '16px', 
              backgroundColor: '#EFF6FF', 
              borderRadius: '8px',
              border: '1px solid #DBEAFE' 
            }}>
              <p style={{ fontSize: '14px', color: '#1E40AF', margin: 0 }}>
                <strong>Território Selecionado:</strong> {selectedCity}, {getCurrentState()?.name}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Market Potential Overview */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          marginBottom: '24px'
        }}>
          <Card style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Potencial de Mercado</p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {marketPotential.totalTargets.toLocaleString('pt-BR')}
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>prospects totais</p>
                </div>
                <Target style={{ width: '32px', height: '32px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Receita Anual Estimada</p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {formatCurrency(marketPotential.annualRevenue)}
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>potencial total</p>
                </div>
                <TrendingUp style={{ width: '32px', height: '32px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Comissão Anual</p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {formatCurrency(marketPotential.commission)}
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>20% da receita</p>
                </div>
                <PieChart style={{ width: '32px', height: '32px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Conversão Estimada</p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {marketPotential.estimatedConversion.toFixed(0)}
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>clientes/ano (8%)</p>
                </div>
                <Users style={{ width: '32px', height: '32px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          
          {/* Target Market Analysis */}
          <Card>
            <CardHeader>
              <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building style={{ width: '20px', height: '20px' }} />
                Análise do Mercado-Alvo
              </CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    🏫 Escolas e Instituições
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{targetMarket.schools}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={targetMarket.schools}
                  onChange={(e) => setTargetMarket(prev => ({ ...prev, schools: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: '#3B82F6' }}
                />
                <p style={{ fontSize: '12px', color: '#6B7280', margin: '4px 0 0 0' }}>
                  Estimativa: {Math.round(targetMarket.schools * 0.12)} conversões/ano
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    🏢 Empresas Corporativas
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{targetMarket.corporations}</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="200"
                  step="5"
                  value={targetMarket.corporations}
                  onChange={(e) => setTargetMarket(prev => ({ ...prev, corporations: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: '#10B981' }}
                />
                <p style={{ fontSize: '12px', color: '#6B7280', margin: '4px 0 0 0' }}>
                  Estimativa: {Math.round(targetMarket.corporations * 0.15)} conversões/ano
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    👥 Clientes Individuais
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{targetMarket.individuals}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={targetMarket.individuals}
                  onChange={(e) => setTargetMarket(prev => ({ ...prev, individuals: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: '#F59E0B' }}
                />
                <p style={{ fontSize: '12px', color: '#6B7280', margin: '4px 0 0 0' }}>
                  Estimativa: {Math.round(targetMarket.individuals * 0.05)} conversões/ano
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Competitive Analysis */}
          <Card>
            <CardHeader>
              <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BarChart3 style={{ width: '20px', height: '20px' }} />
                Análise Competitiva
              </CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Número de Concorrentes Diretos
                </label>
                <select
                  value={competitorAnalysis.directCompetitors}
                  onChange={(e) => setCompetitorAnalysis(prev => ({ ...prev, directCompetitors: Number(e.target.value) }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value={0}>Nenhum</option>
                  <option value={1}>1 concorrente</option>
                  <option value={2}>2 concorrentes</option>
                  <option value={3}>3 concorrentes</option>
                  <option value={4}>4-5 concorrentes</option>
                  <option value={6}>6+ concorrentes</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Participação de Mercado Estimada (%)
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={competitorAnalysis.marketShare}
                    onChange={(e) => setCompetitorAnalysis(prev => ({ ...prev, marketShare: Number(e.target.value) }))}
                    style={{ flex: 1, accentColor: '#8B5CF6' }}
                  />
                  <span style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {competitorAnalysis.marketShare}%
                  </span>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Preço Médio da Concorrência (R$)
                </label>
                <input
                  type="number"
                  value={competitorAnalysis.averagePrice}
                  onChange={(e) => setCompetitorAnalysis(prev => ({ ...prev, averagePrice: Number(e.target.value) }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ 
                padding: '12px', 
                backgroundColor: competitorAnalysis.directCompetitors <= 2 ? '#ECFDF5' : '#FEF2F2', 
                borderRadius: '6px',
                border: `1px solid ${competitorAnalysis.directCompetitors <= 2 ? '#D1FAE5' : '#FECACA'}`
              }}>
                <p style={{ 
                  fontSize: '12px', 
                  color: competitorAnalysis.directCompetitors <= 2 ? '#065F46' : '#991B1B',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {competitorAnalysis.directCompetitors <= 2 
                    ? '✅ Mercado com baixa concorrência - Oportunidade excelente!'
                    : '⚠️ Mercado competitivo - Necessária diferenciação forte'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Marketing Strategy */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardTitle>Estratégia de Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {Object.entries(marketingStrategy).map(([channel, percentage]) => (
                <div key={channel} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                    {channel === 'digitalMarketing' ? '🌐' :
                     channel === 'partnerships' ? '🤝' :
                     channel === 'events' ? '🎪' : '👥'}
                  </div>
                  <h3 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    marginBottom: '8px',
                    color: '#1F2937'
                  }}>
                    {channel === 'digitalMarketing' ? 'Marketing Digital' :
                     channel === 'partnerships' ? 'Parcerias' :
                     channel === 'events' ? 'Eventos' : 'Indicações'}
                  </h3>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold',
                      color: '#059669'
                    }}>
                      {percentage}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={percentage}
                    onChange={(e) => {
                      const newValue = Number(e.target.value)
                      setMarketingStrategy(prev => ({ ...prev, [channel]: newValue }))
                    }}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ 
              marginTop: '16px', 
              padding: '12px', 
              backgroundColor: '#F3F4F6', 
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                Total: {Object.values(marketingStrategy).reduce((sum, val) => sum + val, 0)}%
                {Object.values(marketingStrategy).reduce((sum, val) => sum + val, 0) !== 100 && 
                  <span style={{ color: '#DC2626', marginLeft: '8px' }}>
                    (Ajuste para 100%)
                  </span>
                }
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Action Plan Timeline */}
        <Card>
          <CardHeader>
            <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar style={{ width: '20px', height: '20px' }} />
              Plano de Ação - Primeiros 12 Meses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              
              <Card style={{ border: '2px solid #DBEAFE' }}>
                <CardHeader style={{ backgroundColor: '#EFF6FF', padding: '16px' }}>
                  <CardTitle style={{ fontSize: '16px', color: '#1E40AF' }}>Mês 1-2: Estruturação</CardTitle>
                </CardHeader>
                <CardContent style={{ padding: '16px' }}>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Registro da franquia Better Sell</li>
                    <li>Setup inicial da operação</li>
                    <li>Treinamento Better Tech</li>
                    <li>Configuração sistemas</li>
                    <li>Definição escritório/espaço</li>
                  </ul>
                </CardContent>
              </Card>

              <Card style={{ border: '2px solid #D1FAE5' }}>
                <CardHeader style={{ backgroundColor: '#ECFDF5', padding: '16px' }}>
                  <CardTitle style={{ fontSize: '16px', color: '#065F46' }}>Mês 3-4: Lançamento</CardTitle>
                </CardHeader>
                <CardContent style={{ padding: '16px' }}>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Lançamento marketing digital</li>
                    <li>Primeiros contatos B2B</li>
                    <li>Eventos de networking</li>
                    <li>Parcerias estratégicas</li>
                    <li>Primeiras propostas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card style={{ border: '2px solid #FBBF24' }}>
                <CardHeader style={{ backgroundColor: '#FFFBEB', padding: '16px' }}>
                  <CardTitle style={{ fontSize: '16px', color: '#92400E' }}>Mês 5-8: Crescimento</CardTitle>
                </CardHeader>
                <CardContent style={{ padding: '16px' }}>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Primeiras vendas efetivas</li>
                    <li>Otimização de processos</li>
                    <li>Expansion marketing</li>
                    <li>Diversificação produtos</li>
                    <li>Cliente case studies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card style={{ border: '2px solid #C084FC' }}>
                <CardHeader style={{ backgroundColor: '#FAF5FF', padding: '16px' }}>
                  <CardTitle style={{ fontSize: '16px', color: '#6B21A8' }}>Mês 9-12: Consolidação</CardTitle>
                </CardHeader>
                <CardContent style={{ padding: '16px' }}>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    <li>Análise performance anual</li>
                    <li>Expansão da equipe</li>
                    <li>Planejamento ano 2</li>
                    <li>Renovação contratos</li>
                    <li>Estratégias de retenção</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}