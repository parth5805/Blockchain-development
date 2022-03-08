//add your erc20 token address

var token_address="0x4Bf4b5e947796818a0BCaf3d435AF49e5DF3a8be"

var contract_address="0xC8d9b2dfd8922E82b32B33D4ecFcF70D73d95683"

var contract_abi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscription_id",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC20",
				"name": "_token_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_total_tokens",
				"type": "uint256"
			}
		],
		"name": "Subscribe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_token_per_period",
				"type": "uint256"
			}
		],
		"name": "addSubscription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_subscription_id",
				"type": "uint256"
			}
		],
		"name": "check_subscription",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IERC20",
				"name": "find_token_balance",
				"type": "address"
			}
		],
		"name": "get_C_balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "subscribers",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subscription_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_tokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "subscription_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_period",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subscriptions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "token_per_period",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];