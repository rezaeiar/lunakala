import React from 'react'

export default function Breadcrumb() {
    return (
        <div>
            <div className="container">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-dana py-4">
                    <h4>
                        فروشگاه اینترنتی تکنولایف
                    </h4>
                    <span>/</span>
                    <h4>
                        فروشگاه اینترنتی
                        ساعت هوشمند
                    </h4>
                    <span>/</span>
                    <h4 className='text-gray-600'>
                        اپل واچ
                    </h4>
                </div>
            </div>
        </div>
    )
}
