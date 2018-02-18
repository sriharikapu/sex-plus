var userContent =
{"contracts":{"medical_record.sol:MedicalRecord":{"abi":"[{\"constant\":true,\"inputs\":[],\"name\":\"data\",\"outputs\":[{\"name\":\"std\",\"type\":\"bool\"},{\"name\":\"birthCtr\",\"type\":\"bool\"},{\"name\":\"submitDate\",\"type\":\"uint256\"},{\"name\":\"expDate\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"stdChance\",\"outputs\":[{\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"birthControlChance\",\"outputs\":[{\"name\":\"\",\"type\":\"int256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"std\",\"type\":\"bool\"},{\"name\":\"birthCtr\",\"type\":\"bool\"},{\"name\":\"submitDate\",\"type\":\"uint256\"},{\"name\":\"expDate\",\"type\":\"uint256\"}],\"name\":\"updateData\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"usr\",\"type\":\"address\"},{\"name\":\"prov\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]","bin":"6060604052341561000f57600080fd5b60405160408061051883398101604052808051906020019091908051906020019091905050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610452806100c66000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806373d4a13a14610067578063a2e8c309146100ad578063c782f884146100d6578063fcbf1521146100ff575b600080fd5b341561007257600080fd5b61007a610141565b60405180851515151581526020018415151515815260200183815260200182815260200194505050505060405180910390f35b34156100b857600080fd5b6100c0610179565b6040518082815260200191505060405180910390f35b34156100e157600080fd5b6100e961022a565b6040518082815260200191505060405180910390f35b341561010a57600080fd5b61013f60048080351515906020019091908035151590602001909190803590602001909190803590602001909190505061030b565b005b60028060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060010154908060020154905084565b60008060008060008060008061018d610377565b8061019c575061019b6103ce565b5b90508015156101aa57600080fd5b6030965060009550600260000160009054906101000a900460ff16156101d35760639750610220565b600260010154420394506103e8858115156101ea57fe5b049350603c848115156101f957fe5b049250603c8381151561020857fe5b049150866063830281151561021957fe5b0595508597505b5050505050505090565b60008060008060008060008061023e610377565b8061024d575061024c6103ce565b5b905080151561025b57600080fd5b60309650600095506002800154421080156102855750600260000160019054906101000a900460ff165b156102935760639750610301565b600260000160019054906101000a900460ff1615156102b55760009750610301565b6002800154420394506103e8858115156102cb57fe5b049350603c848115156102da57fe5b049250603c838115156102e957fe5b04915086606383028115156102fa57fe5b0595508597505b5050505050505090565b60006103156103ce565b905080151561032357600080fd5b84600260000160006101000a81548160ff02191690831515021790555083600260000160016101000a81548160ff021916908315150217905550826002600101819055508160028001819055505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149050905600a165627a7a723058209ee3bd9bd1b4371db72216d917e0733cb1136dd9d64a05ec4f2f8acf6e69eb8d0029"},"user.sol:UserContract":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getRecordsContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"user\",\"outputs\":[{\"name\":\"addr\",\"type\":\"address\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"age\",\"type\":\"int256\"},{\"name\":\"gender\",\"type\":\"string\"},{\"name\":\"provider\",\"type\":\"address\"},{\"name\":\"records\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"}],\"name\":\"changeName\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"provider\",\"type\":\"address\"}],\"name\":\"isWhiteListed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"age\",\"type\":\"int256\"},{\"name\":\"gender\",\"type\":\"string\"},{\"name\":\"provider\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]","bin":"6060604052341561000f57600080fd5b604051610e60380380610e6083398101604052808051820191906020018051906020019091908051820191906020018051906020019091905050336000800160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600060010190805190602001906100a59291906101e3565b508260006002018190555081600060030190805190602001906100c99291906101e3565b5080600060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503081610118610263565b808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f080151561019757600080fd5b600060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610298565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061022457805160ff1916838001178555610252565b82800160010185558215610252579182015b82811115610251578251825591602001919060010190610236565b5b50905061025f9190610273565b5090565b6040516105188061094883390190565b61029591905b80821115610291576000816000905550600101610279565b5090565b90565b6106a1806102a76000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317d7de7c1461007257806334e9170d146101005780634f8632ba146101555780635353a2d8146103295780636f9170f614610386575b600080fd5b341561007d57600080fd5b6100856103d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100c55780820151818401526020810190506100aa565b50505050905090810190601f1680156100f25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561010b57600080fd5b610113610482565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016057600080fd5b6101686104ae565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001868152602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381038352888181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102915780601f1061026657610100808354040283529160200191610291565b820191906000526020600020905b81548152906001019060200180831161027457829003601f168201915b50508381038252868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103145780601f106102e957610100808354040283529160200191610314565b820191906000526020600020905b8154815290600101906020018083116102f757829003601f168201915b50509850505050505050505060405180910390f35b341561033457600080fd5b610384600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610536565b005b341561039157600080fd5b6103bd600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105b1565b604051808215151515815260200191505060405180910390f35b6103df6105bc565b60006001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104785780601f1061044d57610100808354040283529160200191610478565b820191906000526020600020905b81548152906001019060200180831161045b57829003601f168201915b5050505050905090565b60008060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001019080600201549080600301908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905086565b6000800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561059457600080fd5b80600060010190805190602001906105ad9291906105d0565b5050565b600060019050919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061061157805160ff191683800117855561063f565b8280016001018555821561063f579182015b8281111561063e578251825591602001919060010190610623565b5b50905061064c9190610650565b5090565b61067291905b8082111561066e576000816000905550600101610656565b5090565b905600a165627a7a723058202a327acb6e43e4dc02621cb39e292db8e5e9f1276ebba8acd301f1f2d316371e00296060604052341561000f57600080fd5b60405160408061051883398101604052808051906020019091908051906020019091905050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610452806100c66000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806373d4a13a14610067578063a2e8c309146100ad578063c782f884146100d6578063fcbf1521146100ff575b600080fd5b341561007257600080fd5b61007a610141565b60405180851515151581526020018415151515815260200183815260200182815260200194505050505060405180910390f35b34156100b857600080fd5b6100c0610179565b6040518082815260200191505060405180910390f35b34156100e157600080fd5b6100e961022a565b6040518082815260200191505060405180910390f35b341561010a57600080fd5b61013f60048080351515906020019091908035151590602001909190803590602001909190803590602001909190505061030b565b005b60028060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060010154908060020154905084565b60008060008060008060008061018d610377565b8061019c575061019b6103ce565b5b90508015156101aa57600080fd5b6030965060009550600260000160009054906101000a900460ff16156101d35760639750610220565b600260010154420394506103e8858115156101ea57fe5b049350603c848115156101f957fe5b049250603c8381151561020857fe5b049150866063830281151561021957fe5b0595508597505b5050505050505090565b60008060008060008060008061023e610377565b8061024d575061024c6103ce565b5b905080151561025b57600080fd5b60309650600095506002800154421080156102855750600260000160019054906101000a900460ff165b156102935760639750610301565b600260000160019054906101000a900460ff1615156102b55760009750610301565b6002800154420394506103e8858115156102cb57fe5b049350603c848115156102da57fe5b049250603c838115156102e957fe5b04915086606383028115156102fa57fe5b0595508597505b5050505050505090565b60006103156103ce565b905080151561032357600080fd5b84600260000160006101000a81548160ff02191690831515021790555083600260000160016101000a81548160ff021916908315150217905550826002600101819055508160028001819055505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149050905600a165627a7a723058209ee3bd9bd1b4371db72216d917e0733cb1136dd9d64a05ec4f2f8acf6e69eb8d0029"}},"version":"0.4.21-develop.2018.2.18+commit.3f7e82d0.Linux.g++"}