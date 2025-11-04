import { useState } from 'react';

const SendParcel = () => {
    const [formData, setFormData] = useState({
        // Sender Information
        senderName: '',
        senderPhone: '',
        senderEmail: '',
        senderAddress: '',
        senderCity: '',
        senderZip: '',

        // Receiver Information
        receiverName: '',
        receiverPhone: '',
        receiverEmail: '',
        receiverAddress: '',
        receiverCity: '',
        receiverZip: '',

        // Parcel Details
        parcelType: '',
        weight: '',
        dimensions: '',
        description: '',
        value: '',

        // Delivery Options
        deliveryType: 'standard',
        insurance: false,
        signature: false,

        // Additional
        notes: ''
    });

    const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const calculateEstimate = () => {
        let baseCost = 0;
        if (formData.deliveryType === 'standard') baseCost = 250;
        if (formData.deliveryType === 'express') baseCost = 500;
        if (formData.deliveryType === 'overnight') baseCost = 800;

        const weight = parseFloat(formData.weight) || 0;
        const weightCost = weight * 50;

        const insuranceCost = formData.insurance ? 100 : 0;
        const signatureCost = formData.signature ? 50 : 0;

        const total = baseCost + weightCost + insuranceCost + signatureCost;
        setEstimatedCost(total);
    };

    // HANDLE SUBMIT FORM
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Parcel created successfully! (Demo)');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HEADER */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center space-x-3">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-600">Send New Parcel</h1>
                            <p className="text-gray-600 mt-1">Fill in the details to send your parcel</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section - Left Side */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {/* Sender Information */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                                        📤
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Sender Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderName"
                                            value={formData.senderName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="senderPhone"
                                            value={formData.senderPhone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="+880 1234-567890"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="senderEmail"
                                            value={formData.senderEmail}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderAddress"
                                            value={formData.senderAddress}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Street address"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderCity"
                                            value={formData.senderCity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="City"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Zip Code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="senderZip"
                                            value={formData.senderZip}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="1200"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Receiver Information */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">
                                        📥
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Receiver Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverName"
                                            value={formData.receiverName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Receiver's name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="receiverPhone"
                                            value={formData.receiverPhone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="+880 1234-567890"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="receiverEmail"
                                            value={formData.receiverEmail}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="receiver@example.com"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverAddress"
                                            value={formData.receiverAddress}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Delivery address"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverCity"
                                            value={formData.receiverCity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="City"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Zip Code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="receiverZip"
                                            value={formData.receiverZip}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="1200"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Parcel Details */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
                                        📦
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Parcel Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Parcel Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="parcelType"
                                            value={formData.parcelType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select type</option>
                                            <option value="documents">Documents</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="clothing">Clothing</option>
                                            <option value="food">Food Items</option>
                                            <option value="fragile">Fragile Items</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Weight (kg) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            step="0.1"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="2.5"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Dimensions (L x W x H cm)
                                        </label>
                                        <input
                                            type="text"
                                            name="dimensions"
                                            value={formData.dimensions}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="30 x 20 x 15"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Declared Value (BDT)
                                        </label>
                                        <input
                                            type="number"
                                            name="value"
                                            value={formData.value}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="5000"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Describe the contents of your parcel"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Options */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
                                        🚚
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800">Delivery Options</h2>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Delivery Speed <span className="text-red-500">*</span>
                                        </label>
                                        <div className="space-y-3">
                                            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="deliveryType"
                                                    value="standard"
                                                    checked={formData.deliveryType === 'standard'}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-green-600"
                                                />
                                                <div className="ml-3 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-gray-800">Standard Delivery</span>
                                                        <span className="text-green-600 font-bold">৳250</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">5-7 business days</p>
                                                </div>
                                            </label>

                                            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="deliveryType"
                                                    value="express"
                                                    checked={formData.deliveryType === 'express'}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-green-600"
                                                />
                                                <div className="ml-3 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-gray-800">Express Delivery</span>
                                                        <span className="text-green-600 font-bold">৳500</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">2-3 business days</p>
                                                </div>
                                            </label>

                                            <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="deliveryType"
                                                    value="overnight"
                                                    checked={formData.deliveryType === 'overnight'}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-green-600"
                                                />
                                                <div className="ml-3 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-semibold text-gray-800">Overnight Delivery</span>
                                                        <span className="text-green-600 font-bold">৳800</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">Next business day</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="insurance"
                                                checked={formData.insurance}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-green-600 rounded"
                                            />
                                            <div className="flex-1">
                                                <span className="font-medium text-gray-800">Add Insurance</span>
                                                <span className="text-green-600 font-semibold ml-2">+৳100</span>
                                                <p className="text-sm text-gray-600">Protect your parcel up to ৳50,000</p>
                                            </div>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="signature"
                                                checked={formData.signature}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-green-600 rounded"
                                            />
                                            <div className="flex-1">
                                                <span className="font-medium text-gray-800">Signature Required</span>
                                                <span className="text-green-600 font-semibold ml-2">+৳50</span>
                                                <p className="text-sm text-gray-600">Receiver must sign for delivery</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Any special instructions or notes..."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section - Right Side */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            {/* Cost Estimate */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Cost Summary</h3>

                                <button
                                    type="button"
                                    onClick={calculateEstimate}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium mb-4 transition-colors"
                                >
                                    Calculate Estimate
                                </button>

                                {estimatedCost !== null && (
                                    <div className="space-y-3 border-t pt-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Base Cost</span>
                                            <span className="font-medium">৳{formData.deliveryType === 'standard' ? '250' : formData.deliveryType === 'express' ? '500' : '800'}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Weight Charges</span>
                                            <span className="font-medium">৳{(parseFloat(formData.weight) || 0) * 50}</span>
                                        </div>
                                        {formData.insurance && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Insurance</span>
                                                <span className="font-medium">৳100</span>
                                            </div>
                                        )}
                                        {formData.signature && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Signature</span>
                                                <span className="font-medium">৳50</span>
                                            </div>
                                        )}
                                        <div className="border-t pt-3 flex justify-between">
                                            <span className="font-bold text-gray-800">Total Cost</span>
                                            <span className="font-bold text-green-600 text-xl">৳{estimatedCost}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Quick Info */}
                            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200 p-6">
                                <h4 className="font-semibold text-gray-800 mb-3">📋 Quick Tips</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start space-x-2">
                                        <span>✓</span>
                                        <span>Pack items securely to prevent damage</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span>✓</span>
                                        <span>Double-check receiver's address</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span>✓</span>
                                        <span>Declare accurate parcel value</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span>✓</span>
                                        <span>Keep tracking number safe</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                                >
                                    <span>📤</span>
                                    <span>Send Parcel</span>
                                </button>
                                <button
                                    type="button"
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Save as Draft
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendParcel;