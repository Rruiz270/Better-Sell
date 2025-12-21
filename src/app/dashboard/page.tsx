'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Bell,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Phone,
  Mail,
  Star
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('30d')

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 124.500",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      description: "vs mês anterior"
    },
    {
      title: "Leads Ativos",
      value: "47",
      change: "+3",
      changeType: "positive", 
      icon: Target,
      description: "novos esta semana"
    },
    {
      title: "Comissão Ganha",
      value: "R$ 24.900",
      change: "+8.2%",
      changeType: "positive",
      icon: TrendingUp,
      description: "vs mês anterior"
    },
    {
      title: "Taxa de Conversão",
      value: "14.2%",
      change: "-2.1%",
      changeType: "negative",
      icon: Users,
      description: "vs mês anterior"
    }
  ]

  const recentLeads = [
    {
      id: 1,
      name: "Maria Silva",
      company: "Colégio São José",
      brand: "Alumni",
      product: "Curso de Inglês",
      value: "R$ 4.500",
      status: "hot",
      location: "São Paulo, SP",
      contact: "+55 11 99999-9999",
      email: "maria@colegio.com",
      lastContact: "2 horas atrás"
    },
    {
      id: 2,
      name: "João Santos",
      company: "Tech Academy",
      brand: "TEACH",
      product: "Plataforma IA Educacional",
      value: "R$ 12.000",
      status: "warm",
      location: "Rio de Janeiro, RJ",
      contact: "+55 21 88888-8888", 
      email: "joao@techacademy.com",
      lastContact: "1 dia atrás"
    },
    {
      id: 3,
      name: "Ana Costa",
      company: "Individual",
      brand: "Kidpreneurs",
      product: "Curso de Empreendedorismo",
      value: "R$ 2.800",
      status: "cold",
      location: "Belo Horizonte, MG",
      contact: "+55 31 77777-7777",
      email: "ana@email.com", 
      lastContact: "3 dias atrás"
    }
  ]

  const brands = [
    { name: 'Alumni', sales: 'R$ 45.200', leads: 18, color: '#3B82F6' },
    { name: 'TEACH', sales: 'R$ 38.100', leads: 12, color: '#8B5CF6' },
    { name: 'Sprix', sales: 'R$ 25.400', leads: 8, color: '#10B981' },
    { name: 'JINSO', sales: 'R$ 15.800', leads: 6, color: '#F59E0B' },
    { name: 'Kidpreneurs', sales: 'R$ 8.900', leads: 3, color: '#EC4899' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return '#FEF2F2'
      case 'warm': return '#FFFBEB'
      case 'cold': return '#EFF6FF'
      default: return '#F9FAFB'
    }
  }

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'hot': return '#DC2626'
      case 'warm': return '#D97706'
      case 'cold': return '#2563EB'
      default: return '#6B7280'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'hot': return '🔥'
      case 'warm': return '⚡'
      case 'cold': return '❄️'
      default: return '📋'
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(59, 130, 246, 0.02) 100%)' }}>
      {/* Header */}
      <header style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)', 
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)', 
        padding: '20px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  borderRadius: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)' 
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>B</span>
                </div>
                <span style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  WebkitBackgroundClip: 'text', 
                  backgroundClip: 'text', 
                  color: 'transparent' 
                }}>
                  Better Sell
                </span>
              </Link>
              <div style={{ height: '40px', width: '1px', background: 'rgba(226, 232, 240, 0.8)' }} />
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1E293B', margin: '0 0 4px 0' }}>Dashboard</h1>
                <p style={{ color: '#64748B', margin: 0, fontSize: '16px' }}>Bem-vindo, João Silva 👋</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '10px',
                color: '#3B82F6',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                <Download style={{ width: '16px', height: '16px' }} />
                Exportar
              </button>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '10px',
                color: '#3B82F6',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                <Calendar style={{ width: '16px', height: '16px' }} />
                {timeRange}
              </button>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}>
                <Bell style={{ width: '16px', height: '16px' }} />
                Notificações
              </button>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px' }}>
        {/* KPI Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          marginBottom: '40px'
        }}>
          {stats.map((stat, index) => {
            const gradients = [
              'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
              'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
            ]
            return (
              <div key={stat.title} style={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}>
                {/* Background gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: gradients[index]
                }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#64748B', margin: '0 0 12px 0' }}>
                      {stat.title}
                    </p>
                    <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1E293B', margin: '0 0 16px 0', lineHeight: '1' }}>
                      {stat.value}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        borderRadius: '10px',
                        background: stat.changeType === 'positive' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'
                      }}>
                        {stat.changeType === 'positive' ? (
                          <ArrowUpRight style={{ width: '16px', height: '16px', color: '#10B981' }} />
                        ) : (
                          <ArrowDownRight style={{ width: '16px', height: '16px', color: '#EF4444' }} />
                        )}
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: '600',
                          color: stat.changeType === 'positive' ? '#10B981' : '#EF4444'
                        }}>
                          {stat.change}
                        </span>
                      </div>
                      <span style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>
                        {stat.description}
                      </span>
                    </div>
                  </div>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: gradients[index],
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${gradients[index].includes('#3B82F6') ? 'rgba(59, 130, 246, 0.3)' : gradients[index].includes('#10B981') ? 'rgba(16, 185, 129, 0.3)' : gradients[index].includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                  }}>
                    <stat.icon style={{ width: '28px', height: '28px', color: 'white' }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          gap: '24px'
        }}>
          
          {/* Recent Leads */}
          <Card>
            <CardHeader style={{ paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardTitle style={{ fontSize: '18px' }}>Leads Recentes</CardTitle>
                <Button variant="outline" size="sm">Ver Todos</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {recentLeads.map((lead) => (
                  <div key={lead.id} style={{ 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '8px', 
                    padding: '16px',
                    transition: 'box-shadow 0.2s',
                    cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <div style={{ 
                            width: '40px', 
                            height: '40px', 
                            background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '600'
                          }}>
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 style={{ fontWeight: '600', color: '#1E293B', margin: 0 }}>
                              {lead.name}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                              {lead.company}
                            </p>
                          </div>
                        </div>
                        
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                          gap: '12px', 
                          marginBottom: '12px' 
                        }}>
                          <div>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>Marca:</span>
                            <p style={{ fontWeight: '500', margin: 0 }}>{lead.brand}</p>
                          </div>
                          <div>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>Valor:</span>
                            <p style={{ fontWeight: '500', color: '#10B981', margin: 0 }}>{lead.value}</p>
                          </div>
                          <div>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>Local:</span>
                            <p style={{ fontWeight: '500', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <MapPin style={{ width: '12px', height: '12px' }} />
                              {lead.location}
                            </p>
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748B' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Phone style={{ width: '12px', height: '12px' }} />
                              {lead.contact}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Mail style={{ width: '12px', height: '12px' }} />
                              {lead.email}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ 
                              padding: '4px 8px', 
                              borderRadius: '12px', 
                              fontSize: '12px', 
                              fontWeight: '500',
                              backgroundColor: getStatusColor(lead.status),
                              color: getStatusTextColor(lead.status)
                            }}>
                              {getStatusIcon(lead.status)} {lead.status.toUpperCase()}
                            </span>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>
                              {lead.lastContact}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Brand Performance */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: '16px' }}>Performance das Marcas</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {brands.map((brand) => (
                    <div key={brand.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          backgroundColor: brand.color, 
                          borderRadius: '50%' 
                        }} />
                        <div>
                          <p style={{ fontWeight: '500', color: '#1E293B', margin: 0 }}>{brand.name}</p>
                          <p style={{ fontSize: '12px', color: '#64748B', margin: 0 }}>{brand.leads} leads</p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontWeight: '600', color: '#1E293B', margin: 0 }}>{brand.sales}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: '16px' }}>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Button variant="outline" style={{ justifyContent: 'flex-start' }}>
                  <Target style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Adicionar Lead
                </Button>
                <Button variant="outline" style={{ justifyContent: 'flex-start' }}>
                  <DollarSign style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Registrar Venda
                </Button>
                <Button variant="outline" style={{ justifyContent: 'flex-start' }}>
                  <Users style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Contatar Suporte
                </Button>
                <Button variant="outline" style={{ justifyContent: 'flex-start' }}>
                  <Star style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                  Avaliar Experiência
                </Button>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle style={{ fontSize: '16px' }}>Metas Mensais</CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
                    <span>Meta de Vendas</span>
                    <span>R$ 124k / R$ 150k</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#E2E8F0', borderRadius: '4px', height: '8px' }}>
                    <div style={{ 
                      width: '82%', 
                      background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)', 
                      height: '8px', 
                      borderRadius: '4px' 
                    }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
                    <span>Leads Convertidos</span>
                    <span>18 / 25</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#E2E8F0', borderRadius: '4px', height: '8px' }}>
                    <div style={{ 
                      width: '72%', 
                      background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', 
                      height: '8px', 
                      borderRadius: '4px' 
                    }} />
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