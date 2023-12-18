export const FORM_1_DATA = {
    "title": "CLOSE CONTROL UNIT MAINTENANCE TEST RECORD",
    "steps": [
        {
            "title": "Summary",
            "controls": [
                {
                    "id": "client",
                    "label": "Client",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "unit_manufacturer",
                    "label": "Unit Manufacturer",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "date",
                    "label": "Date",
                    "type": "date",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 1: System Details",
            "controls": [
                {
                    "id": "system_type",
                    "label": "System Type",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "air_water_cooled",
                    "label": "Air/Water Cooled?",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 2: Electrical Checks",
            "controls": [
                {
                    "id": "compressor_fla",
                    "label": "Compressor FLA",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "compressor_run_namps",
                    "label": "COMPRESSORR RUN NAMPS",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 3: Refrigeration circuit checks",
            "controls": [
                {
                    "id": "gas_type",
                    "label": "Gas Type",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "suction_pressure",
                    "label": "Suction Pressure",
                    "type": "text",
                    "required": true
                }
            ]
        },
        {
            "title": "Section 4: Mechanical Checks",
            "controls": [
                {
                    "id": "main_fan_vee_belts",
                    "label": "MAIN FAN VEE BELTS",
                    "type": "text",
                    "required": true
                },
                {
                    "id": "drive_package_alignment",
                    "label": "DRIVE PACKAGE ALIGNMENT",
                    "type": "text",
                    "required": true
                }
            ]
        }
    ]
}