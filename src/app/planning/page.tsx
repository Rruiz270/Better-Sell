'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  DollarSign, 
  TrendingUp, 
  Calculator, 
  Target,
  PieChart,
  BarChart3,
  Download,
  Plus,
  Minus,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Calendar,
  Building,
  Users
} from "lucide-react"
import Link from "next/link"

export default function AdvancedFinancialPlanning() {
  // Core Financial Parameters
  const [parameters, setParameters] = useState({
    investmentInitial: 50000,
    averageTicket: 3500,
    monthlySales: 15,
    operationalCostPercent: 25,
    projectionYears: 3,
    territorySize: 'medium', // small, medium, large
    marketPenetration: 8 // percentage
  })

  // Brand Performance Mix
  const [brandMix, setBrandMix] = useState({
    alumni: { percentage: 35, averageTicket: 4200, conversionRate: 12 },
    teach: { percentage: 25, averageTicket: 6800, conversionRate: 8 },
    sprix: { percentage: 20, averageTicket: 2800, conversionRate: 15 },
    jinso: { percentage: 12, averageTicket: 1800, conversionRate: 18 },
    kidpreneurs: { percentage: 8, averageTicket: 1200, conversionRate: 22 }
  })

  // Operational Structure
  const [operationalStructure, setOperationalStructure] = useState({
    team: {
      manager: 1,
      salesReps: 2,
      marketing: 1,
      support: 0.5
    },
    costs: {
      salaries: 18000,
      marketing: 8500,
      infrastructure: 4200,
      software: 1800,
      training: 1200,
      other: 2300
    }
  })

  // Territory Analysis
  const territoryData = {
    small: { population: 150000, schools: 45, corporations: 180, leads: 120 },
    medium: { population: 500000, schools: 120, corporations: 450, leads: 300 },
    large: { population: 1200000, schools: 280, corporations: 850, leads: 680 }
  }

  // Financial Calculations
  const calculateFinancialProjections = () => {
    const territory = territoryData[parameters.territorySize as keyof typeof territoryData]
    const monthlyRevenue = parameters.monthlySales * parameters.averageTicket
    const yearlyRevenue = monthlyRevenue * 12
    const commission = yearlyRevenue * 0.20 // 20% commission rate
    const totalOperationalCosts = Object.values(operationalStructure.costs).reduce((sum, cost) => sum + cost, 0) * 12
    const yearlyProfit = commission - totalOperationalCosts
    const roi = ((yearlyProfit * parameters.projectionYears - parameters.investmentInitial) / parameters.investmentInitial) * 100
    const paybackPeriod = parameters.investmentInitial / (yearlyProfit / 12)

    // Growth projections
    const projections = []
    for (let year = 1; year <= parameters.projectionYears; year++) {
      const growthFactor = Math.pow(1.15, year - 1) // 15% annual growth
      const yearRevenue = yearlyRevenue * growthFactor
      const yearCommission = yearRevenue * 0.20
      const yearCosts = totalOperationalCosts * Math.pow(1.08, year - 1) // 8% cost inflation
      const yearProfit = yearCommission - yearCosts
      
      projections.push({
        year,
        revenue: yearRevenue,
        commission: yearCommission,
        costs: yearCosts,
        profit: yearProfit,
        margin: (yearProfit / yearCommission) * 100
      })
    }

    return {
      monthlyRevenue,
      yearlyRevenue,
      commission,
      totalOperationalCosts,
      yearlyProfit,
      roi,
      paybackPeriod,
      projections,
      territory
    }
  }

  const financial = calculateFinancialProjections()

  // Brand Revenue Distribution
  const calculateBrandRevenue = () => {
    return Object.entries(brandMix).map(([brand, data]) => ({
      brand,
      percentage: data.percentage,
      monthlyRevenue: (financial.monthlyRevenue * data.percentage) / 100,
      yearlyRevenue: (financial.yearlyRevenue * data.percentage) / 100,
      averageTicket: data.averageTicket,
      conversionRate: data.conversionRate
    }))
  }

  const brandRevenue = calculateBrandRevenue()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  const updateParameter = (key: string, value: any) => {
    setParameters(prev => ({ ...prev, [key]: value }))
  }

  const updateBrandMix = (brand: string, field: string, value: number) => {
    setBrandMix(prev => ({
      ...prev,
      [brand]: { ...(prev as any)[brand], [field]: value }
    }))
  }

  const updateOperationalCost = (category: string, value: number) => {
    setOperationalStructure(prev => ({
      ...prev,
      costs: { ...prev.costs, [category]: value }
    }))
  }

  const exportFinancialModel = () => {
    const model = {
      parameters,
      brandMix,
      operationalStructure,
      financial,
      brandRevenue,
      generatedAt: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(model, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `better-sell-financial-model-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFC' }}>
      {/* Advanced Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 0'
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 32px' }}>
          <Link href="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            textDecoration: 'none',
            color: 'white',
            marginBottom: '16px'
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>B</span>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>Better Sell</span>
          </Link>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontSize: '42px', fontWeight: '700', margin: '0 0 8px 0' }}>
                Modelo Financeiro Avançado Better Sell
              </h1>
              <p style={{ fontSize: '18px', opacity: 0.9, margin: 0 }}>
                Análise completa de viabilidade e projeções para sua franquia Better Sell
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button 
                onClick={exportFinancialModel}
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Exportar Modelo
              </Button>
              <Link href="/business-plan">
                <Button style={{ 
                  backgroundColor: 'white', 
                  color: '#667eea' 
                }}>
                  <Building style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Plano de Negócios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '32px' }}>
        
        {/* Key Performance Indicators */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          <Card style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white',
            border: 'none'
          }}>
            <CardContent style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    ROI Projetado ({parameters.projectionYears} anos)
                  </p>
                  <p style={{ fontSize: '36px', fontWeight: '700', margin: '0 0 4px 0' }}>
                    {formatPercent(financial.roi)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>
                      Payback: {financial.paybackPeriod.toFixed(1)} meses
                    </span>
                  </div>
                </div>
                <TrendingUp style={{ width: '48px', height: '48px', opacity: 0.6 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', 
            color: 'white',
            border: 'none'
          }}>
            <CardContent style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Lucro Anual Projetado
                  </p>
                  <p style={{ fontSize: '36px', fontWeight: '700', margin: '0 0 4px 0' }}>
                    {formatCurrency(financial.yearlyProfit)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>
                      Margem: {formatPercent((financial.yearlyProfit / financial.commission) * 100)}
                    </span>
                  </div>
                </div>
                <DollarSign style={{ width: '48px', height: '48px', opacity: 0.6 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', 
            color: 'white',
            border: 'none'
          }}>
            <CardContent style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Receita Anual
                  </p>
                  <p style={{ fontSize: '36px', fontWeight: '700', margin: '0 0 4px 0' }}>
                    {formatCurrency(financial.yearlyRevenue)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>
                      {parameters.monthlySales} vendas/mês × {formatCurrency(parameters.averageTicket)}
                    </span>
                  </div>
                </div>
                <BarChart3 style={{ width: '48px', height: '48px', opacity: 0.6 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)', 
            color: 'white',
            border: 'none'
          }}>
            <CardContent style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Território ({parameters.territorySize})
                  </p>
                  <p style={{ fontSize: '36px', fontWeight: '700', margin: '0 0 4px 0' }}>
                    {financial.territory.population.toLocaleString('pt-BR')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '12px', opacity: 0.8 }}>
                      {financial.territory.schools} escolas, {financial.territory.corporations} empresas
                    </span>
                  </div>
                </div>
                <Target style={{ width: '48px', height: '48px', opacity: 0.6 }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Configuration Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '32px', marginBottom: '40px' }}>
          
          {/* Parameters Configuration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
                  <Calculator style={{ width: '20px', height: '20px' }} />
                  Parâmetros Principais
                </CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px', display: 'block' }}>
                    Investimento Inicial
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="range"
                      min="30000"
                      max="100000"
                      step="5000"
                      value={parameters.investmentInitial}
                      onChange={(e) => updateParameter('investmentInitial', Number(e.target.value))}
                      style={{ width: '100%', marginBottom: '8px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280' }}>
                      <span>R$ 30k</span>
                      <span style={{ fontWeight: '600', color: '#667eea' }}>{formatCurrency(parameters.investmentInitial)}</span>
                      <span>R$ 100k</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px', display: 'block' }}>
                    Ticket Médio por Venda
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="range"
                      min="1500"
                      max="8000"
                      step="100"
                      value={parameters.averageTicket}
                      onChange={(e) => updateParameter('averageTicket', Number(e.target.value))}
                      style={{ width: '100%', marginBottom: '8px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280' }}>
                      <span>R$ 1.5k</span>
                      <span style={{ fontWeight: '600', color: '#667eea' }}>{formatCurrency(parameters.averageTicket)}</span>
                      <span>R$ 8k</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px', display: 'block' }}>
                    Vendas Mensais
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateParameter('monthlySales', Math.max(5, parameters.monthlySales - 1))}
                    >
                      <Minus style={{ width: '14px', height: '14px' }} />
                    </Button>
                    <div style={{ 
                      padding: '12px 24px', 
                      backgroundColor: '#F3F4F6', 
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '18px',
                      minWidth: '80px',
                      textAlign: 'center',
                      color: '#667eea'
                    }}>
                      {parameters.monthlySales}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateParameter('monthlySales', Math.min(50, parameters.monthlySales + 1))}
                    >
                      <Plus style={{ width: '14px', height: '14px' }} />
                    </Button>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px', display: 'block' }}>
                    Tamanho do Território
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    {['small', 'medium', 'large'].map(size => (
                      <Button
                        key={size}
                        variant={parameters.territorySize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => updateParameter('territorySize', size)}
                        style={{ 
                          textTransform: 'capitalize',
                          backgroundColor: parameters.territorySize === size ? '#667eea' : 'transparent',
                          color: parameters.territorySize === size ? 'white' : '#667eea'
                        }}
                      >
                        {size === 'small' ? 'Pequeno' : size === 'medium' ? 'Médio' : 'Grande'}
                      </Button>
                    ))}
                  </div>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px' }}>
                    {parameters.territorySize === 'small' && 'Cidades até 200k habitantes'}
                    {parameters.territorySize === 'medium' && 'Cidades de 200k a 800k habitantes'}
                    {parameters.territorySize === 'large' && 'Cidades acima de 800k habitantes'}
                  </p>
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px', display: 'block' }}>
                    Período de Projeção
                  </label>
                  <select
                    value={parameters.projectionYears}
                    onChange={(e) => updateParameter('projectionYears', Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    <option value={1}>1 ano</option>
                    <option value={2}>2 anos</option>
                    <option value={3}>3 anos</option>
                    <option value={5}>5 anos</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
                  <Users style={{ width: '20px', height: '20px' }} />
                  Custos Operacionais
                </CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {Object.entries(operationalStructure.costs).map(([category, value]) => (
                  <div key={category} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151', textTransform: 'capitalize' }}>
                      {category === 'salaries' ? 'Salários' :
                       category === 'marketing' ? 'Marketing' :
                       category === 'infrastructure' ? 'Infraestrutura' :
                       category === 'software' ? 'Software/Tech' :
                       category === 'training' ? 'Treinamento' : 'Outros'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateOperationalCost(category, Math.max(500, value - 500))}
                      >
                        <Minus style={{ width: '12px', height: '12px' }} />
                      </Button>
                      <span style={{ 
                        padding: '4px 12px', 
                        backgroundColor: '#F3F4F6', 
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        minWidth: '90px',
                        textAlign: 'center',
                        color: '#374151'
                      }}>
                        {formatCurrency(value)}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateOperationalCost(category, value + 500)}
                      >
                        <Plus style={{ width: '12px', height: '12px' }} />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div style={{ 
                  borderTop: '2px solid #E5E7EB', 
                  paddingTop: '16px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#1F2937' }}>Total Mensal</span>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    color: '#667eea',
                    backgroundColor: '#EEF2FF',
                    padding: '8px 16px',
                    borderRadius: '8px'
                  }}>
                    {formatCurrency(Object.values(operationalStructure.costs).reduce((sum, cost) => sum + cost, 0))}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Performance & Projections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
                  <PieChart style={{ width: '20px', height: '20px' }} />
                  Performance por Marca
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {brandRevenue.map((brand) => (
                    <div key={brand.brand} style={{ 
                      padding: '20px',
                      border: '2px solid #F3F4F6',
                      borderRadius: '12px',
                      backgroundColor: '#FAFBFC'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ fontSize: '24px' }}>
                            {brand.brand === 'alumni' ? '🎓' :
                             brand.brand === 'teach' ? '🤖' :
                             brand.brand === 'sprix' ? '💻' :
                             brand.brand === 'jinso' ? '📱' : '👶'}
                          </span>
                          <div>
                            <h3 style={{ 
                              fontSize: '16px', 
                              fontWeight: '700', 
                              textTransform: 'capitalize', 
                              color: '#1F2937',
                              margin: 0
                            }}>
                              {brand.brand}
                            </h3>
                            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                              Taxa conversão: {(brandMix as any)[brand.brand].conversionRate}%
                            </p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '18px', fontWeight: '700', color: '#667eea', margin: 0 }}>
                            {formatPercent(brand.percentage)}
                          </p>
                          <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                            {formatCurrency(brand.yearlyRevenue)}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                          <span>Participação</span>
                          <span>{brand.percentage}%</span>
                        </div>
                        <div style={{ 
                          width: '100%', 
                          backgroundColor: '#E5E7EB', 
                          borderRadius: '4px', 
                          height: '8px',
                          overflow: 'hidden'
                        }}>
                          <div style={{ 
                            width: `${brand.percentage}%`, 
                            background: `linear-gradient(90deg, #667eea 0%, #764ba2 100%)`, 
                            height: '8px', 
                            borderRadius: '4px' 
                          }} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
                        <div>
                          <span style={{ color: '#6B7280' }}>Ticket Médio:</span>
                          <br />
                          <span style={{ fontWeight: '600', color: '#374151' }}>{formatCurrency(brand.averageTicket)}</span>
                        </div>
                        <div>
                          <span style={{ color: '#6B7280' }}>Receita Mensal:</span>
                          <br />
                          <span style={{ fontWeight: '600', color: '#374151' }}>{formatCurrency(brand.monthlyRevenue)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
                  <BarChart3 style={{ width: '20px', height: '20px' }} />
                  Projeção Financeira ({parameters.projectionYears} anos)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#F8FAFC' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Ano</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Receita</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Comissão (20%)</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Custos</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Lucro</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '700', color: '#374151' }}>Margem</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financial.projections.map((projection) => (
                        <tr key={projection.year} style={{ borderBottom: '1px solid #F3F4F6' }}>
                          <td style={{ padding: '12px', fontSize: '14px', fontWeight: '600' }}>
                            Ano {projection.year}
                          </td>
                          <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '500' }}>
                            {formatCurrency(projection.revenue)}
                          </td>
                          <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '500', color: '#059669' }}>
                            {formatCurrency(projection.commission)}
                          </td>
                          <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px', fontWeight: '500', color: '#DC2626' }}>
                            {formatCurrency(projection.costs)}
                          </td>
                          <td style={{ 
                            padding: '12px', 
                            textAlign: 'right', 
                            fontSize: '14px', 
                            fontWeight: '700',
                            color: projection.profit > 0 ? '#059669' : '#DC2626' 
                          }}>
                            {formatCurrency(projection.profit)}
                          </td>
                          <td style={{ 
                            padding: '12px', 
                            textAlign: 'right', 
                            fontSize: '14px', 
                            fontWeight: '600',
                            color: projection.margin > 20 ? '#059669' : projection.margin > 10 ? '#F59E0B' : '#DC2626'
                          }}>
                            {formatPercent(projection.margin)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ 
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#EEF2FF',
                  borderRadius: '8px',
                  border: '1px solid #C7D2FE'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', textAlign: 'center' }}>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6366F1', fontWeight: '600', margin: '0 0 4px 0' }}>
                        LUCRO TOTAL
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937', margin: 0 }}>
                        {formatCurrency(financial.projections.reduce((sum, p) => sum + p.profit, 0))}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6366F1', fontWeight: '600', margin: '0 0 4px 0' }}>
                        ROI TOTAL
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937', margin: 0 }}>
                        {formatPercent(financial.roi)}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: '#6366F1', fontWeight: '600', margin: '0 0 4px 0' }}>
                        PAYBACK
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937', margin: 0 }}>
                        {financial.paybackPeriod.toFixed(1)} meses
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}