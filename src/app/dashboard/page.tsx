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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', margin: 0 }}>Dashboard</h1>
              <p style={{ color: '#64748B', margin: 0 }}>Bem-vindo, João Silva</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button variant="outline" size="sm">
                <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Exportar
              </Button>
              <Button variant="outline" size="sm">
                <Calendar style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                {timeRange}
              </Button>
              <Button size="sm">
                <Bell style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Notificações
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        {/* KPI Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px',
          marginBottom: '32px'
        }}>
          {stats.map((stat) => (
            <Card key={stat.title} style={{ 
              padding: '24px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#64748B', margin: '0 0 8px 0' }}>
                    {stat.title}
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1E293B', margin: '0 0 8px 0' }}>
                    {stat.value}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight style={{ width: '16px', height: '16px', color: '#10B981' }} />
                    ) : (
                      <ArrowDownRight style={{ width: '16px', height: '16px', color: '#EF4444' }} />
                    )}
                    <span style={{ 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: stat.changeType === 'positive' ? '#10B981' : '#EF4444'
                    }}>
                      {stat.change}
                    </span>
                    <span style={{ fontSize: '14px', color: '#64748B', marginLeft: '4px' }}>
                      {stat.description}
                    </span>
                  </div>
                </div>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <stat.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
              </div>
            </Card>
          ))}
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