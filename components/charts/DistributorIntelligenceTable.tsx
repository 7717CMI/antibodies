'use client'

interface DistributorIntelligenceTableProps {
  title?: string
  height?: number
}

export function DistributorIntelligenceTable({ title, height = 600 }: DistributorIntelligenceTableProps) {
  // Sample data - replace with actual data source later
  const distributors = [
    {
      company: 'Cedarlane Labs',
      headquarters: 'Ontario, Canada',
      geographicalPresence: 'North America (Canada)',
      products: 'HUABIO-Monoclonal antibodies',
      email: 'sales@cedarlanelabs.com',
      phone: '+1 (289) 288-0001',
      website: 'www.cedarlanelabs.com'
    },
    // Placeholder rows
    ...Array(6).fill(null).map((_, i) => ({
      company: 'xxxxx',
      headquarters: 'xxxxx',
      geographicalPresence: 'xxxxx',
      products: 'xxxxx',
      email: 'xxxxx',
      phone: 'xxxxx',
      website: 'xxxxx'
    }))
  ]

  return (
    <div className="w-full">
      {/* Title */}
      {title && (
        <div className="mb-4">
          <h3 className="text-base font-semibold text-black">
            {title}
          </h3>
        </div>
      )}

      {/* Table */}
      <div className="overflow-auto bg-white rounded-lg border border-gray-200" style={{ maxHeight: height }}>
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-10">
            {/* Main header row with Contact Details spanning 3 columns */}
            <tr>
              <th
                rowSpan={2}
                className="px-4 py-3 text-left text-sm font-semibold text-white bg-[#168AAD] border border-white"
              >
                Distributor/Supplier Company
              </th>
              <th
                rowSpan={2}
                className="px-4 py-3 text-left text-sm font-semibold text-white bg-[#168AAD] border border-white"
              >
                Headquarters
              </th>
              <th
                rowSpan={2}
                className="px-4 py-3 text-left text-sm font-semibold text-white bg-[#168AAD] border border-white"
              >
                Geographical Presence
              </th>
              <th
                rowSpan={2}
                className="px-4 py-3 text-left text-sm font-semibold text-white bg-[#168AAD] border border-white"
              >
                Products
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 text-center text-sm font-semibold text-white bg-[#168AAD] border border-white"
              >
                Contact Details
              </th>
            </tr>
            {/* Sub-header row for Contact Details columns */}
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black bg-[#B8D4E8] border border-white">
                Email Address<br/>(verified / generic)
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black bg-[#B8D4E8] border border-white">
                Phone / WhatsApp Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-black bg-[#B8D4E8] border border-white">
                Website URL
              </th>
            </tr>
          </thead>
          <tbody>
            {distributors.map((dist, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-[#E8F4F8]' : 'bg-white'} hover:bg-[#D4E9F2] transition-colors`}
              >
                <td className="px-4 py-3 text-sm text-white font-medium bg-[#168AAD] border border-gray-200">
                  {dist.company}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.headquarters}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.geographicalPresence}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.products}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.email !== 'xxxxx' ? (
                    <a
                      href={`mailto:${dist.email}`}
                      className="text-[#168AAD] hover:underline"
                    >
                      {dist.email}
                    </a>
                  ) : (
                    dist.email
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.phone !== 'xxxxx' ? (
                    <a
                      href={`tel:${dist.phone.replace(/\s/g, '')}`}
                      className="text-[#168AAD] hover:underline"
                    >
                      {dist.phone}
                    </a>
                  ) : (
                    dist.phone
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-black border border-gray-200">
                  {dist.website !== 'xxxxx' ? (
                    <a
                      href={`https://${dist.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#168AAD] hover:underline"
                    >
                      {dist.website}
                    </a>
                  ) : (
                    dist.website
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3">
        <p className="text-sm text-black">
          <span className="font-semibold text-yellow-800">*Kindly Note:</span> This section covers information on distributors/suppliers of the specified products in <span className="font-semibold">each country</span> included within the scope
        </p>
      </div>
    </div>
  )
}

export default DistributorIntelligenceTable
