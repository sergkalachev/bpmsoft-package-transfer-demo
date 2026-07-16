define("LeadPageV2", [], function() {
	return {
		entitySchemaName: "Lead",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		businessRulesMultiplyActions: /**SCHEMA_ANGULAR_BUSINESS_RULES*/{}/**SCHEMA_ANGULAR_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "LeadPageSQLTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "insert",
				"name": "STRING0ce738a7-04fe-4e8e-9347-3e60851ad5e7",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "LeadPageRegisterInfoBlock"
					},
					"bindTo": "UsrNewTextField",
					"enabled": true
				},
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "STRING83fea339-ad6d-4b5e-832c-6b63841ed63e",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "LeadPageRegisterInfoBlock"
					},
					"bindTo": "UsrGitDemoField2",
					"enabled": true
				},
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "merge",
				"name": "Campaign",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "BulkEmail",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "Event",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "DealSpecificsTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 10
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 9
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "TrackingEventsTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "WrongBrowserInfoDescription",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 5,
						"column": 3,
						"row": 7
					}
				}
			},
			{
				"operation": "move",
				"name": "SalesOwnerV2",
				"parentName": "LeadPageSQLTabGridLayout",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "move",
				"name": "OpportunityDepartmentV2",
				"parentName": "LeadPageSQLTabGridLayout",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "move",
				"name": "Account",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "MobilePhone",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "move",
				"name": "Email",
				"parentName": "LeadPageRegisterInfoBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "move",
				"name": "SalesOwner",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_DIFF*/
	};
});
