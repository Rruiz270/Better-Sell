'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, TrendingDown, Calculator, BarChart3, DollarSign, Users, Target, Sliders, RefreshCw, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Scenarios() {
  const [selectedScenario, setSelectedScenario] = useState('realistic')
  const [customParams, setCustomParams] = useState({
    conversionRate: 16,
    avgDealSize: 22000,
    marketPenetration: 0.003,
    operationalCosts: 8000,
    marketGrowth: 12
  })

  const territories = {
    premium: { name: 'Metro Premium', investment: 60000, regions: 'São Paulo, Rio de Janeiro, Brasília', marketSize: 2500000 },
    growth: { name: 'Regional Growth', investment: 50000, regions: 'Capitais Sul/Sudeste/Nordeste', marketSize: 1800000 },
    emerging: { name: 'Emerging Markets', investment: 40000, regions: 'Interior e cidades médias', marketSize: 1200000 }
  }

  const scenarios = {
    pessimistic: {
      name: 'Conservative',
      description: 'Conservative scenario with market challenges',
      color: '#EF4444',
      icon: TrendingDown,
      params: {
        conversionRate: 8,
        avgDealSize: 18000,
        marketPenetration: 0.001,
        operationalCosts: 12000,
        marketGrowth: 5
      },
      assumptions: [
        'Competitive market with high resistance',
        'Longer sales cycles and ramp-up time',
        'Higher operational costs during learning phase',
        'Organic lead generation takes time to scale'
      ]
    },
    realistic: {
      name: 'Realistic',
      description: 'Market-based projections with proven strategies',
      color: '#F59E0B',
      icon: TrendingUp,
      params: {
        conversionRate: 16,
        avgDealSize: 22000,
        marketPenetration: 0.003,
        operationalCosts: 8000,
        marketGrowth: 12
      },
      assumptions: [
        'Performance aligned with market benchmarks',
        'Gradual and sustainable growth pattern',
        'Controlled operational costs',
        'Balanced client acquisition mix'
      ]
    },
    optimistic: {
      name: 'Optimistic',
      description: 'Excellent execution with strong network effects',
      color: '#10B981',
      icon: TrendingUp,
      params: {
        conversionRate: 28,
        avgDealSize: 28000,
        marketPenetration: 0.008,
        operationalCosts: 6000,
        marketGrowth: 25
      },
      assumptions: [
        'Exceptional strategy execution',
        'Strong referral network and partnerships',
        'Optimized operational efficiency',
        'Accelerated market penetration'
      ]
    },
    custom: {
      name: 'Custom',
      description: 'Adjust your own parameters',
      color: '#8B5CF6',
      icon: Sliders,
      params: customParams,
      assumptions: [
        'User-defined parameters',
        'Customized scenario modeling',
        'Adjustable variables',
        'Personalized simulation'
      ]
    }
  }

  const calculateProjections = (scenarioParams: any, territory: any) => {
    // Organic lead generation based on market penetration
    const monthlyLeads = Math.round((territory.marketSize * scenarioParams.marketPenetration) / 12)
    const conversionRate = scenarioParams.conversionRate / 100
    const monthlyDeals = monthlyLeads * conversionRate
    const monthlyRevenue = monthlyDeals * scenarioParams.avgDealSize
    const franchiseShare = monthlyRevenue * 0.25 // 25% franchise commission
    const netMonthlyRevenue = franchiseShare - scenarioParams.operationalCosts
    const annualRevenue = netMonthlyRevenue * 12
    const totalInvestment = territory.investment // Only franchise investment
    const roi = (annualRevenue / totalInvestment) * 100
    const paybackMonths = totalInvestment / Math.max(netMonthlyRevenue, 1)

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
      conversionRate: scenarioParams.conversionRate,
      marketPenetration: (scenarioParams.marketPenetration * 100).toFixed(3)
    }
  }

  const projections = Object.entries(territories).map(([key, territory]) => ({
    territory: key,
    name: territory.name,
    ...calculateProjections(scenarios[selectedScenario as keyof typeof scenarios].params, territory)
  }))

  const selectedScenarioData = scenarios[selectedScenario as keyof typeof scenarios]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Better Sell
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Scenario Modeling</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link href="/planning" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Back to Planning
              </Link>
              <Link href="/presentation">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                  View Presentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
            <Calculator className="w-4 h-4 mr-2" />
            Financial Scenario Analysis
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Scenario Modeling
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare different financial scenarios based on organic lead generation strategies 
            and market penetration approaches. Model various market conditions and execution levels.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Select a Scenario
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(scenarios).map(([key, scenario]) => {
              const isSelected = selectedScenario === key
              return (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? 'ring-2 shadow-lg' : 'hover:shadow-md'
                  }`}
                  style={{ 
                    borderColor: isSelected ? scenario.color : undefined,
                    backgroundColor: isSelected ? `${scenario.color}08` : undefined
                  }}
                  onClick={() => setSelectedScenario(key)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: scenario.color }}
                      >
                        <scenario.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {scenario.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600">
                      {scenario.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Custom Parameters */}
        {selectedScenario === 'custom' && (
          <Card className="mb-16 p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Adjust Custom Parameters
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(customParams).map(([key, value]) => {
                const labels = {
                  conversionRate: 'Conversion Rate (%)',
                  avgDealSize: 'Average Deal Size (R$)',
                  marketPenetration: 'Market Penetration (%)',
                  operationalCosts: 'Monthly Operational Costs (R$)',
                  marketGrowth: 'Annual Market Growth (%)'
                }
                const adjustedValue = key === 'marketPenetration' ? value * 100 : value
                return (
                  <div key={key} className="bg-white rounded-lg p-4 border border-slate-200">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {labels[key as keyof typeof labels]}
                    </label>
                    <input
                      type="number"
                      step={key === 'marketPenetration' ? '0.001' : key === 'conversionRate' ? '1' : '1000'}
                      value={adjustedValue}
                      onChange={(e) => {
                        const newValue = parseFloat(e.target.value) || 0
                        const finalValue = key === 'marketPenetration' ? newValue / 100 : newValue
                        setCustomParams({
                          ...customParams,
                          [key]: finalValue
                        })
                      }}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                )
              })}
            </div>
            <Button 
              size="lg"
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => setSelectedScenario('custom')}
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Update Projections
            </Button>
          </Card>
        )}

        {/* Scenario Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Scenario Info */}
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: selectedScenarioData.color }}
              >
                <selectedScenarioData.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedScenarioData.name} Scenario
              </h3>
            </div>
            
            <p className="text-slate-600 mb-8">
              {selectedScenarioData.description}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Key Assumptions:
              </h4>
              <div className="space-y-3">
                {selectedScenarioData.assumptions.map((assumption, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: selectedScenarioData.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{assumption}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Key Parameters:
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Conversion Rate:</span>
                  <strong className="text-slate-900">{selectedScenarioData.params.conversionRate}%</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Avg Deal Size:</span>
                  <strong className="text-slate-900">R$ {selectedScenarioData.params.avgDealSize.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Market Penetration:</span>
                  <strong className="text-slate-900">{(selectedScenarioData.params.marketPenetration * 100).toFixed(3)}%</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Monthly OpEx:</span>
                  <strong className="text-slate-900">R$ {selectedScenarioData.params.operationalCosts.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </Card>

          {/* Strategic Overview */}
          <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Strategic Approach
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-3">Organic Lead Generation Focus</h4>
                <p className="text-sm text-slate-600 mb-4">
                  This scenario is based on building sustainable, organic lead generation capabilities rather than purchased lead volumes.
                </p>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">
                    Market Penetration: {(selectedScenarioData.params.marketPenetration * 100).toFixed(3)}% monthly
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center border border-slate-200">
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: selectedScenarioData.color }}
                  >
                    {Math.round(projections.reduce((acc, p) => acc + p.roi, 0) / projections.length)}%
                  </div>
                  <div className="text-sm text-slate-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-slate-200">
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: selectedScenarioData.color }}
                  >
                    {Math.round(projections.reduce((acc, p) => acc + p.paybackMonths, 0) / projections.length)}
                  </div>
                  <div className="text-sm text-slate-600">Avg Payback (months)</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Territory Comparison */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Territory Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projections.map((proj) => {
              const gradients = ['from-blue-500 to-blue-600', 'from-emerald-500 to-emerald-600', 'from-purple-500 to-purple-600']
              const index = Object.keys(territories).indexOf(proj.territory)
              return (
                <Card 
                  key={proj.territory}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    border: `2px solid ${selectedScenarioData.color}20`,
                    backgroundColor: `${selectedScenarioData.color}05`
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${gradients[index]}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-slate-900">{proj.name}</h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600">
                          R$ {proj.totalInvestment.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-500">Investment</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Market Reach:</span>
                          <p className="font-semibold text-slate-900">{proj.monthlyLeads} leads/mo</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Conversion:</span>
                          <p className="font-semibold text-slate-900">{proj.conversionRate}%</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Monthly Deals:</span>
                          <p className="font-semibold text-slate-900">{proj.monthlyDeals}</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Franchise Share:</span>
                          <p className="font-semibold text-slate-900">R$ {Math.round(proj.franchiseShare).toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-slate-200 pt-4">
                        <div className="mb-3">
                          <span className="text-slate-500 text-sm">Net Monthly Revenue:</span>
                          <p 
                            className="text-2xl font-bold mt-1"
                            style={{ color: selectedScenarioData.color }}
                          >
                            R$ {Math.round(proj.netMonthlyRevenue).toLocaleString()}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-500">Annual ROI:</span>
                            <p 
                              className="font-bold text-lg"
                              style={{ color: selectedScenarioData.color }}
                            >
                              {proj.roi.toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <span className="text-slate-500">Payback:</span>
                            <p className="font-semibold text-slate-900">
                              {proj.paybackMonths.toFixed(1)} months
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-16">
          <Link href="/planning">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg border-slate-300 hover:bg-slate-50"
            >
              Adjust Parameters
            </Button>
          </Link>
          <Link href="/presentation">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
            >
              Generate Presentation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}