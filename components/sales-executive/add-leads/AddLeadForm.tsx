export default function AddLeadForm() {
  const inputClass =
    "w-full h-11 md:h-11 border border-[#D1D5DB] rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#071B3B]";

  const labelClass =
    "block text-sm text-[#6B7280] mb-2";

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-8 lg:gap-y-7">
        <div>
          <label className={labelClass}>Company Name</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Business Type</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Industry Category</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Address</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Location</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Contact Person Name</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Phone Number</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Email ID</label>
          <input type="email" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Website</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>LinkedIn Page</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Instagram Page</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>YouTube Page</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Google Maps Link</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Service / Product Offered</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Years Of Experience</label>
          <input type="number" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>No. Of Employees (approx.)</label>
          <input type="number" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Target Market</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Lead Priority</label>
          <select className={inputClass}>
            <option>Select Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Reason For Priority</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Strength</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Weakness</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Opportunity</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Best Time To Contact</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Added Date</label>
          <input type="date" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Lead Source</label>
          <input type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Lead Owner</label>
          <select className={inputClass}>
            <option>Varshini</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional Notes</label>
        <textarea
          rows={4}
          className="w-full border border-[#D1D5DB] rounded-lg px-3 py-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#071B3B]"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
        <button
          type="button"
          className="w-full sm:w-auto px-5 py-2 border border-[#D1D5DB] rounded-lg text-sm"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-2 bg-[#071B3B] text-white rounded-lg text-sm"
        >
          Add Lead
        </button>
      </div>
    </form>
  );
}