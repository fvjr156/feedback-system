export const groupByFormID = (data) => {
    const grouped_data = {};
    for (const entry of data) {
      const form_id = entry.msforms_form_id;
      if (!grouped_data[form_id]) {
        grouped_data[form_id] = [];
      }
      grouped_data[form_id].push(entry);
    }
    return grouped_data;
  };