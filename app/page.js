export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        International Shipping Quote
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Get an instant quote for your international shipment
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Panel - Form */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Shipping Details
                        </h2>
                        <p className="text-gray-500">Form fields will appear here</p>
                    </div>

                    {/* Right Panel - Quote Display */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Quote Comparison
                        </h2>
                        <p className="text-gray-500">Quotes will appear here</p>
                    </div>
                </div>
            </main>
        </div>
    );
}