'use client'

import { useState } from 'react'
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
  ArrowUpRight,
  Building,
  Users,
  Settings,
  Lightbulb,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function ModernFinancialPlanning() {
  // Core Financial Parameters
  const [parameters, setParameters] = useState({
    investmentInitial: 50000,
    averageTicket: 4800,
    monthlySales: 18,
    projectionYears: 3,
    territorySize: 'medium'
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
    costs: {
      salaries: 5000,
      marketing: 2000,
      infrastructure: 1500,
      software: 600,
      training: 300,
      other: 800
    }
  })

  // Territory Analysis
  const territoryData = {
    small: { population: 150000, schools: 45, corporations: 180 },
    medium: { population: 500000, schools: 120, corporations: 450 },
    large: { population: 1200000, schools: 280, corporations: 850 }
  }

  // Financial Calculations
  const calculateFinancialProjections = () => {
    const territory = territoryData[parameters.territorySize as keyof typeof territoryData]
    const monthlyRevenue = parameters.monthlySales * parameters.averageTicket
    const yearlyRevenue = monthlyRevenue * 12
    const commission = yearlyRevenue * 0.20
    const totalOperationalCosts = Object.values(operationalStructure.costs).reduce((sum, cost) => sum + cost, 0) * 12
    const yearlyProfit = commission - totalOperationalCosts

    // Growth projections
    const projections = []
    for (let year = 1; year <= parameters.projectionYears; year++) {
      const growthFactor = Math.pow(1.15, year - 1)
      const yearRevenue = yearlyRevenue * growthFactor
      const yearCommission = yearRevenue * 0.20
      const yearCosts = totalOperationalCosts * Math.pow(1.08, year - 1)
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

    const totalProfitOverYears = projections.reduce((sum, p) => sum + p.profit, 0)
    const roi = totalProfitOverYears > 0 ? ((totalProfitOverYears - parameters.investmentInitial) / parameters.investmentInitial) * 100 : -100
    const paybackPeriod = yearlyProfit > 0 ? parameters.investmentInitial / (yearlyProfit / 12) : 999

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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      
      {/* Modern Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <Link href="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '16px', 
            textDecoration: 'none',
            color: 'white',
            marginBottom: '32px'
          }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>B</span>
            </div>
            <span style={{ fontSize: '24px', fontWeight: '700' }}>Better Sell</span>
          </Link>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: '800', 
                margin: '0 0 12px 0',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Planejamento Financeiro
              </h1>
              <p style={{ 
                fontSize: '20px', 
                color: 'rgba(255,255,255,0.9)', 
                margin: 0,
                maxWidth: '600px'
              }}>
                Modelo financeiro inteligente para análise completa de ROI, projeções e viabilidade da sua franquia Better Sell
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button 
                onClick={exportFinancialModel}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                <Download style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                Exportar Modelo
              </Button>
              <Link href="/business-plan">
                <Button style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
                  color: '#667eea',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 8px 32px rgba(255,255,255,0.3)'
                }}>
                  <Building style={{ width: '18px', height: '18px', marginRight: '8px' }} />
                  Plano de Negócios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>
        
        {/* Modern KPI Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          marginBottom: '48px'
        }}>
          <Card style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />
            <CardContent style={{ padding: '32px', color: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ 
                    fontSize: '14px', 
                    opacity: 0.8, 
                    margin: '0 0 8px 0', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontWeight: '600'
                  }}>
                    ROI Projetado ({parameters.projectionYears} anos)
                  </p>
                  <p style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 8px 0' }}>
                    {formatPercent(financial.roi)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '14px', opacity: 0.9 }}>
                      Payback: {financial.paybackPeriod.toFixed(1)} meses
                    </span>
                  </div>
                </div>
                <div style={{ 
                  width: '60px', 
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUp style={{ width: '28px', height: '28px' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            border: 'none',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />
            <CardContent style={{ padding: '32px', color: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ 
                    fontSize: '14px', 
                    opacity: 0.8, 
                    margin: '0 0 8px 0', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontWeight: '600'
                  }}>
                    Lucro Anual Projetado
                  </p>
                  <p style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 8px 0' }}>
                    {formatCurrency(financial.yearlyProfit)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '14px', opacity: 0.9 }}>
                      Margem: {formatPercent((financial.yearlyProfit / financial.commission) * 100)}
                    </span>
                  </div>
                </div>
                <div style={{ 
                  width: '60px', 
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <DollarSign style={{ width: '28px', height: '28px' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            border: 'none',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />
            <CardContent style={{ padding: '32px', color: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ 
                    fontSize: '14px', 
                    opacity: 0.8, 
                    margin: '0 0 8px 0', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontWeight: '600'
                  }}>
                    Receita Anual
                  </p>
                  <p style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 8px 0' }}>
                    {formatCurrency(financial.yearlyRevenue)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '14px', opacity: 0.9 }}>
                      {parameters.monthlySales} vendas/mês × {formatCurrency(parameters.averageTicket)}
                    </span>
                  </div>
                </div>
                <div style={{ 
                  width: '60px', 
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <BarChart3 style={{ width: '28px', height: '28px' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card style={{ 
            background: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
            border: 'none',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />
            <CardContent style={{ padding: '32px', color: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ 
                    fontSize: '14px', 
                    opacity: 0.8, 
                    margin: '0 0 8px 0', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontWeight: '600'
                  }}>
                    Território ({parameters.territorySize})
                  </p>
                  <p style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 8px 0' }}>
                    {financial.territory.population.toLocaleString('pt-BR')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '14px', opacity: 0.9 }}>
                      {financial.territory.schools} escolas, {financial.territory.corporations} empresas
                    </span>
                  </div>
                </div>
                <div style={{ 
                  width: '60px', 
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target style={{ width: '28px', height: '28px' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern Control Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          
          {/* Beautiful Parameters Section */}
          <Card style={{ 
            borderRadius: '24px', 
            border: 'none',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
          }}>
            <CardHeader style={{ paddingBottom: '16px' }}>
              <CardTitle style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                fontSize: '24px',
                fontWeight: '700',
                color: '#2d3748'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Settings style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                Parâmetros do Negócio
              </CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Investment Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#4a5568'
                  }}>
                    Investimento Inicial
                  </label>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}>
                    {formatCurrency(parameters.investmentInitial)}
                  </div>
                </div>
                <div style={{ position: 'relative', marginBottom: '8px' }}>
                  <input
                    type="range"
                    min="30000"
                    max="100000"
                    step="5000"
                    value={parameters.investmentInitial}
                    onChange={(e) => updateParameter('investmentInitial', Number(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '4px',
                      background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#a0aec0' }}>
                  <span>R$ 30k</span>
                  <span>R$ 100k</span>
                </div>
              </div>

              {/* Ticket Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#4a5568'
                  }}>
                    Ticket Médio por Venda
                  </label>
                  <div style={{
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}>
                    {formatCurrency(parameters.averageTicket)}
                  </div>
                </div>
                <div style={{ position: 'relative', marginBottom: '8px' }}>
                  <input
                    type="range"
                    min="2000"
                    max="8000"
                    step="100"
                    value={parameters.averageTicket}
                    onChange={(e) => updateParameter('averageTicket', Number(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '4px',
                      background: 'linear-gradient(to right, #11998e 0%, #38ef7d 100%)',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#a0aec0' }}>
                  <span>R$ 2k</span>
                  <span>R$ 8k</span>
                </div>
              </div>

              {/* Sales Counter */}
              <div>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#4a5568',
                  marginBottom: '16px',
                  display: 'block'
                }}>
                  Vendas Mensais
                </label>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '20px',
                  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '2px solid #e2e8f0'
                }}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateParameter('monthlySales', Math.max(5, parameters.monthlySales - 1))}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #cbd5e0',
                      background: 'white',
                      color: '#4a5568'
                    }}
                  >
                    <Minus style={{ width: '20px', height: '20px' }} />
                  </Button>
                  <div style={{ 
                    padding: '16px 32px', 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: '16px',
                    fontWeight: '800',
                    fontSize: '32px',
                    minWidth: '120px',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)'
                  }}>
                    {parameters.monthlySales}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateParameter('monthlySales', Math.min(50, parameters.monthlySales + 1))}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      border: '2px solid #cbd5e0',
                      background: 'white',
                      color: '#4a5568'
                    }}
                  >
                    <Plus style={{ width: '20px', height: '20px' }} />
                  </Button>
                </div>
              </div>

              {/* Territory Selection */}
              <div>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#4a5568',
                  marginBottom: '16px',
                  display: 'block'
                }}>
                  Tamanho do Território
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  {[
                    { key: 'small', label: 'Pequeno', desc: '150k hab' },
                    { key: 'medium', label: 'Médio', desc: '500k hab' },
                    { key: 'large', label: 'Grande', desc: '1.2M hab' }
                  ].map(size => (
                    <Button
                      key={size.key}
                      variant={parameters.territorySize === size.key ? "default" : "outline"}
                      onClick={() => updateParameter('territorySize', size.key)}
                      style={{ 
                        padding: '16px 12px',
                        flexDirection: 'column',
                        height: 'auto',
                        background: parameters.territorySize === size.key 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                          : 'white',
                        color: parameters.territorySize === size.key ? 'white' : '#4a5568',
                        border: parameters.territorySize === size.key 
                          ? 'none' 
                          : '2px solid #e2e8f0',
                        boxShadow: parameters.territorySize === size.key 
                          ? '0 8px 32px rgba(102, 126, 234, 0.4)' 
                          : 'none'
                      }}
                    >
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>{size.label}</span>
                      <span style={{ fontSize: '12px', opacity: 0.7 }}>{size.desc}</span>
                    </Button>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Beautiful Brand Performance */}
          <Card style={{ 
            borderRadius: '24px', 
            border: 'none',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
          }}>
            <CardHeader style={{ paddingBottom: '16px' }}>
              <CardTitle style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                fontSize: '24px',
                fontWeight: '700',
                color: '#2d3748'
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px',
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <PieChart style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                Performance por Marca
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {Object.entries(brandMix).map(([brand, data]) => {
                  const brandRevenue = (financial.yearlyRevenue * data.percentage) / 100
                  return (
                    <div key={brand} style={{ 
                      padding: '24px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,249,250,0.8) 100%)',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px'
                          }}>
                            {brand === 'alumni' ? '🎓' :
                             brand === 'teach' ? '🤖' :
                             brand === 'sprix' ? '💻' :
                             brand === 'jinso' ? '📱' : '👶'}
                          </div>
                          <div>
                            <h3 style={{ 
                              fontSize: '18px', 
                              fontWeight: '700', 
                              textTransform: 'capitalize', 
                              color: '#2d3748',
                              margin: '0 0 4px 0'
                            }}>
                              {brand}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#718096', margin: 0 }}>
                              {data.conversionRate}% conversão • {formatCurrency(data.averageTicket)} ticket
                            </p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '24px', fontWeight: '800', color: '#667eea', margin: '0 0 4px 0' }}>
                            {data.percentage}%
                          </p>
                          <p style={{ fontSize: '14px', color: '#4a5568', margin: 0 }}>
                            {formatCurrency(brandRevenue)}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ 
                          width: '100%', 
                          backgroundColor: '#f1f5f9', 
                          borderRadius: '8px', 
                          height: '12px',
                          overflow: 'hidden'
                        }}>
                          <div style={{ 
                            width: `${data.percentage}%`, 
                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', 
                            height: '12px',
                            borderRadius: '8px',
                            transition: 'width 0.3s ease'
                          }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern Projections Table */}
        <Card style={{ 
          borderRadius: '24px', 
          border: 'none',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
        }}>
          <CardHeader>
            <CardTitle style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '24px',
              fontWeight: '700',
              color: '#2d3748'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px',
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BarChart3 style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              Projeção Financeira ({parameters.projectionYears} anos)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 12px' }}>
                <thead>
                  <tr>
                    <th style={{ 
                      padding: '16px', 
                      textAlign: 'left', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Ano</th>
                    <th style={{ 
                      padding: '16px', 
                      textAlign: 'right', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Receita</th>
                    <th style={{ 
                      padding: '16px', 
                      textAlign: 'right', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Comissão</th>
                    <th style={{ 
                      padding: '16px', 
                      textAlign: 'right', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Lucro</th>
                    <th style={{ 
                      padding: '16px', 
                      textAlign: 'right', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>Margem</th>
                  </tr>
                </thead>
                <tbody>
                  {financial.projections.map((projection, index) => (
                    <tr key={projection.year} style={{ 
                      background: 'linear-gradient(135deg, rgba(248,249,250,0.8) 0%, rgba(237,242,247,0.8) 100%)',
                      borderRadius: '12px'
                    }}>
                      <td style={{ 
                        padding: '20px 16px', 
                        fontSize: '16px', 
                        fontWeight: '700',
                        color: '#2d3748',
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px'
                      }}>
                        Ano {projection.year}
                      </td>
                      <td style={{ padding: '20px 16px', textAlign: 'right', fontSize: '16px', fontWeight: '600' }}>
                        {formatCurrency(projection.revenue)}
                      </td>
                      <td style={{ 
                        padding: '20px 16px', 
                        textAlign: 'right', 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: '#38a169' 
                      }}>
                        {formatCurrency(projection.commission)}
                      </td>
                      <td style={{ 
                        padding: '20px 16px', 
                        textAlign: 'right', 
                        fontSize: '16px', 
                        fontWeight: '700',
                        color: projection.profit > 0 ? '#38a169' : '#e53e3e' 
                      }}>
                        {formatCurrency(projection.profit)}
                      </td>
                      <td style={{ 
                        padding: '20px 16px', 
                        textAlign: 'right', 
                        fontSize: '16px', 
                        fontWeight: '700',
                        color: projection.margin > 20 ? '#38a169' : projection.margin > 10 ? '#dd6b20' : '#e53e3e',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px'
                      }}>
                        {formatPercent(projection.margin)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Cards */}
            <div style={{ 
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '12px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Lucro Total
                </p>
                <p style={{ fontSize: '24px', fontWeight: '800', margin: 0 }}>
                  {formatCurrency(financial.projections.reduce((sum, p) => sum + p.profit, 0))}
                </p>
              </div>
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '12px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  ROI Total
                </p>
                <p style={{ fontSize: '24px', fontWeight: '800', margin: 0 }}>
                  {formatPercent(financial.roi)}
                </p>
              </div>
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '12px', opacity: 0.8, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Payback
                </p>
                <p style={{ fontSize: '24px', fontWeight: '800', margin: 0 }}>
                  {financial.paybackPeriod.toFixed(1)} meses
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}