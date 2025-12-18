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
  FileText,
  Download,
  Plus,
  Minus,
  Info
} from "lucide-react"
import Link from "next/link"

export default function FinancialPlanning() {
  // Investment & Revenue Parameters
  const [initialInvestment, setInitialInvestment] = useState(50000)
  const [monthlyOperationalCosts, setMonthlyOperationalCosts] = useState(8000)
  const [averageTicket, setAverageTicket] = useState(2500)
  const [monthlySales, setMonthlySales] = useState(12)
  const [commissionRate] = useState(0.20) // Fixed 20%
  const [projectionMonths, setProjectionMonths] = useState(24)

  // Costs breakdown
  const [costs, setCosts] = useState({
    marketing: 2500,
    rent: 3000,
    salaries: 4500,
    utilities: 500,
    software: 800,
    materials: 700,
    other: 1000
  })

  // Revenue by brand
  const [brandRevenue, setBrandRevenue] = useState({
    alumni: 40,
    teach: 25,
    sprix: 15,
    jinso: 12,
    kidpreneurs: 8
  })

  // Calculated values
  const [financialProjection, setFinancialProjection] = useState<any[]>([])
  const [roiAnalysis, setROIAnalysis] = useState({
    breakEvenMonth: 0,
    totalROI: 0,
    monthlyProfit: 0,
    yearlyRevenue: 0
  })

  // Calculate financial projections
  useEffect(() => {
    const monthlyRevenue = monthlySales * averageTicket
    const monthlyCommission = monthlyRevenue * commissionRate
    const totalMonthlyCosts = Object.values(costs).reduce((sum, cost) => sum + cost, 0)
    const monthlyProfit = monthlyCommission - totalMonthlyCosts
    
    const projection = []
    let cumulativeProfit = -initialInvestment
    let breakEvenMonth = 0

    for (let month = 1; month <= projectionMonths; month++) {
      const monthData = {
        month,
        revenue: monthlyRevenue,
        commission: monthlyCommission,
        costs: totalMonthlyCosts,
        profit: monthlyProfit,
        cumulativeProfit: cumulativeProfit + monthlyProfit
      }
      
      cumulativeProfit += monthlyProfit
      
      if (cumulativeProfit > 0 && breakEvenMonth === 0) {
        breakEvenMonth = month
      }
      
      projection.push(monthData)
    }

    const totalROI = ((cumulativeProfit + initialInvestment) / initialInvestment) * 100
    const yearlyRevenue = monthlyRevenue * 12

    setFinancialProjection(projection)
    setROIAnalysis({
      breakEvenMonth,
      totalROI,
      monthlyProfit,
      yearlyRevenue
    })
  }, [initialInvestment, monthlySales, averageTicket, costs, projectionMonths])

  const updateCost = (category: string, value: number) => {
    setCosts(prev => ({ ...prev, [category]: value }))
  }

  const updateBrandRevenue = (brand: string, percentage: number) => {
    setBrandRevenue(prev => ({ ...prev, [brand]: percentage }))
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(value)
  }

  const exportFinancialPlan = () => {
    const data = {
      parameters: {
        initialInvestment,
        monthlyOperationalCosts,
        averageTicket,
        monthlySales,
        commissionRate,
        projectionMonths
      },
      costs,
      brandRevenue,
      roiAnalysis,
      projection: financialProjection.slice(0, 12) // First year
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `better-sell-financial-plan-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
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
                Planejamento Financeiro
              </h1>
              <p style={{ color: '#64748B', margin: 0 }}>
                Calcule ROI, orçamento e projeções para sua franquia
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button variant="outline" onClick={exportFinancialPlan}>
                <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Exportar Plano
              </Button>
              <Link href="/dashboard">
                <Button>
                  <BarChart3 style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px' }}>
        {/* Key Metrics */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          marginBottom: '32px'
        }}>
          <Card style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Investimento Inicial</p>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>
                    {formatCurrency(initialInvestment)}
                  </p>
                </div>
                <DollarSign style={{ width: '40px', height: '40px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>ROI Projetado</p>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>
                    {roiAnalysis.totalROI.toFixed(1)}%
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>
                    em {projectionMonths} meses
                  </p>
                </div>
                <TrendingUp style={{ width: '40px', height: '40px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Ponto de Equilíbrio</p>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>
                    {roiAnalysis.breakEvenMonth || '∞'}
                  </p>
                  <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>
                    {roiAnalysis.breakEvenMonth ? 'meses' : 'não atingido'}
                  </p>
                </div>
                <Target style={{ width: '40px', height: '40px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>

          <Card style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', color: 'white' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Lucro Mensal</p>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>
                    {formatCurrency(roiAnalysis.monthlyProfit)}
                  </p>
                </div>
                <Calculator style={{ width: '40px', height: '40px', opacity: 0.8 }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Planning Interface */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          
          {/* Parameters Configuration */}
          <Card>
            <CardHeader>
              <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calculator style={{ width: '20px', height: '20px' }} />
                Parâmetros de Negócio
              </CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Investment Parameters */}
              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Investimento Inicial
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>R$</span>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Ticket Médio por Venda
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="number"
                    value={averageTicket}
                    onChange={(e) => setAverageTicket(Number(e.target.value))}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>R$</span>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Vendas por Mês
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlySales(Math.max(1, monthlySales - 1))}
                  >
                    <Minus style={{ width: '12px', height: '12px' }} />
                  </Button>
                  <span style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#F3F4F6', 
                    borderRadius: '6px',
                    fontWeight: '500',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    {monthlySales}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlySales(monthlySales + 1)}
                  >
                    <Plus style={{ width: '12px', height: '12px' }} />
                  </Button>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Período de Projeção
                </label>
                <select
                  value={projectionMonths}
                  onChange={(e) => setProjectionMonths(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value={12}>12 meses</option>
                  <option value={18}>18 meses</option>
                  <option value={24}>24 meses</option>
                  <option value={36}>36 meses</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Cost Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PieChart style={{ width: '20px', height: '20px' }} />
                Custos Operacionais Mensais
              </CardTitle>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Object.entries(costs).map(([category, value]) => (
                <div key={category} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151', textTransform: 'capitalize' }}>
                    {category === 'marketing' ? 'Marketing' :
                     category === 'rent' ? 'Aluguel' :
                     category === 'salaries' ? 'Salários' :
                     category === 'utilities' ? 'Utilidades' :
                     category === 'software' ? 'Software' :
                     category === 'materials' ? 'Materiais' : 'Outros'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateCost(category, Math.max(0, value - 100))}
                    >
                      <Minus style={{ width: '12px', height: '12px' }} />
                    </Button>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#F3F4F6', 
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      minWidth: '80px',
                      textAlign: 'center'
                    }}>
                      {formatCurrency(value)}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateCost(category, value + 100)}
                    >
                      <Plus style={{ width: '12px', height: '12px' }} />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div style={{ 
                borderTop: '1px solid #E5E7EB', 
                paddingTop: '16px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#1F2937' }}>Total Mensal</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669' }}>
                  {formatCurrency(Object.values(costs).reduce((sum, cost) => sum + cost, 0))}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue by Brand */}
        <Card style={{ marginBottom: '32px' }}>
          <CardHeader>
            <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart3 style={{ width: '20px', height: '20px' }} />
              Distribuição de Receita por Marca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {Object.entries(brandRevenue).map(([brand, percentage]) => (
                <div key={brand} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '24px', 
                    marginBottom: '8px'
                  }}>
                    {brand === 'alumni' ? '🎓' :
                     brand === 'teach' ? '🤖' :
                     brand === 'sprix' ? '💻' :
                     brand === 'jinso' ? '📱' : '👶'}
                  </div>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    textTransform: 'capitalize', 
                    marginBottom: '8px',
                    color: '#1F2937'
                  }}>
                    {brand}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateBrandRevenue(brand, Math.max(0, percentage - 1))}
                    >
                      <Minus style={{ width: '12px', height: '12px' }} />
                    </Button>
                    <span style={{ 
                      padding: '4px 12px', 
                      backgroundColor: '#F3F4F6', 
                      borderRadius: '6px',
                      fontWeight: '600',
                      minWidth: '50px'
                    }}>
                      {percentage}%
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => updateBrandRevenue(brand, Math.min(100, percentage + 1))}
                    >
                      <Plus style={{ width: '12px', height: '12px' }} />
                    </Button>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px' }}>
                    {formatCurrency((roiAnalysis.yearlyRevenue * percentage) / 100)} / ano
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Projection Chart */}
        <Card>
          <CardHeader>
            <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp style={{ width: '20px', height: '20px' }} />
              Projeção Financeira ({projectionMonths} meses)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#F9FAFB' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Mês</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Receita</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Comissão</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Custos</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Lucro</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#374151' }}>Acumulado</th>
                  </tr>
                </thead>
                <tbody>
                  {financialProjection.slice(0, 12).map((month) => (
                    <tr key={month.month} style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '12px', fontSize: '14px', fontWeight: '500' }}>
                        {month.month}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px' }}>
                        {formatCurrency(month.revenue)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px', color: '#059669' }}>
                        {formatCurrency(month.commission)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right', fontSize: '14px', color: '#DC2626' }}>
                        {formatCurrency(month.costs)}
                      </td>
                      <td style={{ 
                        padding: '12px', 
                        textAlign: 'right', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: month.profit > 0 ? '#059669' : '#DC2626' 
                      }}>
                        {formatCurrency(month.profit)}
                      </td>
                      <td style={{ 
                        padding: '12px', 
                        textAlign: 'right', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: month.cumulativeProfit > 0 ? '#059669' : '#DC2626' 
                      }}>
                        {formatCurrency(month.cumulativeProfit)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}