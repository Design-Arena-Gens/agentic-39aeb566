'use client'

import { useState } from 'react'

interface Product {
  name: string
  category: string
  estimatedPrice: string
  estimatedProfit: string
  demandLevel: string
  competitors: number
  reason: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const analyzeProducts = async () => {
    setLoading(true)

    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000))

    const topProducts: Product[] = [
      {
        name: 'حامل هاتف مغناطيسي للسيارة بتقنية الشحن اللاسلكي',
        category: 'إكسسوارات السيارات',
        estimatedPrice: '89-129 درهم',
        estimatedProfit: '35-50 درهم للوحدة',
        demandLevel: 'عالي جداً',
        competitors: 2,
        reason: 'منتج عملي يحتاجه معظم السائقين، الطلب المحلي مرتفع بسبب انتشار السيارات الحديثة'
      },
      {
        name: 'منظم أدراج المطبخ قابل للتعديل (عربي التصميم)',
        category: 'أدوات المنزل والمطبخ',
        estimatedPrice: '65-95 درهم',
        estimatedProfit: '28-40 درهم للوحدة',
        demandLevel: 'عالي',
        competitors: 3,
        reason: 'الطلب كبير مع دخول سكان جدد وتجديد المنازل، منافسة محدودة للمنتجات عالية الجودة'
      },
      {
        name: 'مصباح قراءة LED قابل لإعادة الشحن مع مشبك',
        category: 'الإضاءة',
        estimatedPrice: '45-75 درهم',
        estimatedProfit: '20-35 درهم للوحدة',
        demandLevel: 'عالي',
        competitors: 2,
        reason: 'منتج موسم الدراسة، طلب مستمر من الطلاب والعاملين عن بعد'
      },
      {
        name: 'حقيبة تخزين مكياج سفر مقاومة للماء',
        category: 'منتجات التجميل والعناية الشخصية',
        estimatedPrice: '55-85 درهم',
        estimatedProfit: '25-38 درهم للوحدة',
        demandLevel: 'عالي جداً',
        competitors: 3,
        reason: 'الإمارات وجهة سفر رئيسية، طلب قوي من المسافرين والمقيمين'
      },
      {
        name: 'حصيرة تمارين يوغا صديقة للبيئة مع حزام حمل',
        category: 'معدات الرياضة واللياقة البدنية',
        estimatedPrice: '79-119 درهم',
        estimatedProfit: '32-48 درهم للوحدة',
        demandLevel: 'عالي',
        competitors: 2,
        reason: 'اتجاه متزايد نحو الصحة واللياقة، منافسة قليلة للمنتجات الصديقة للبيئة'
      }
    ]

    setProducts(topProducts)
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🔍 محلل منتجات أمازون الإمارات
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.95
          }}>
            اكتشف أفضل 5 منتجات مربحة بطلب عالي ومنافسة منخفضة
          </p>
        </header>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <button
            onClick={analyzeProducts}
            disabled={loading}
            style={{
              backgroundColor: loading ? '#9CA3AF' : '#10B981',
              color: 'white',
              padding: '16px 48px',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              transition: 'all 0.3s',
              transform: loading ? 'scale(0.98)' : 'scale(1)'
            }}
            onMouseOver={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#059669'
            }}
            onMouseOut={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#10B981'
            }}
          >
            {loading ? '🔄 جاري التحليل...' : '🚀 ابدأ التحليل'}
          </button>
        </div>

        {products.length > 0 && (
          <div style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '2rem',
                    marginLeft: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </span>
                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    color: '#1F2937',
                    lineHeight: '1.4'
                  }}>
                    {product.name}
                  </h3>
                </div>

                <div style={{
                  backgroundColor: '#F3F4F6',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}>
                  <p style={{ margin: '6px 0', color: '#4B5563', fontSize: '0.95rem' }}>
                    <strong>📁 الفئة:</strong> {product.category}
                  </p>
                  <p style={{ margin: '6px 0', color: '#4B5563', fontSize: '0.95rem' }}>
                    <strong>💰 السعر المتوقع:</strong> {product.estimatedPrice}
                  </p>
                  <p style={{ margin: '6px 0', color: '#059669', fontSize: '0.95rem', fontWeight: 'bold' }}>
                    <strong>💵 الربح المتوقع:</strong> {product.estimatedProfit}
                  </p>
                  <p style={{ margin: '6px 0', color: '#4B5563', fontSize: '0.95rem' }}>
                    <strong>📊 مستوى الطلب:</strong> {product.demandLevel}
                  </p>
                  <p style={{ margin: '6px 0', color: '#7C3AED', fontSize: '0.95rem', fontWeight: 'bold' }}>
                    <strong>👥 عدد المنافسين:</strong> {product.competitors}
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#EEF2FF',
                  padding: '12px',
                  borderRadius: '8px',
                  borderRight: '4px solid #667eea'
                }}>
                  <p style={{
                    margin: 0,
                    color: '#374151',
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                    <strong>💡 السبب:</strong> {product.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {products.length > 0 && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            padding: '24px',
            marginTop: '40px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              color: '#1F2937',
              marginTop: 0,
              marginBottom: '16px'
            }}>
              📋 نصائح للنجاح
            </h2>
            <ul style={{
              color: '#4B5563',
              lineHeight: '1.8',
              fontSize: '1rem'
            }}>
              <li>تحقق من جودة المنتج والموردين قبل البدء</li>
              <li>راقب المراجعات والتقييمات للمنافسين</li>
              <li>استثمر في صور منتجات احترافية ووصف مفصل</li>
              <li>استخدم إعلانات أمازون المدفوعة لزيادة الظهور</li>
              <li>تابع المخزون والشحن بشكل دوري لضمان رضا العملاء</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
