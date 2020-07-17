export function getEnumLabel(l_enumid, l_enumvalue) {
  return window["enumLabel"] == null
    ? ""
    : window["enumLabel"][l_enumid + "_" + l_enumvalue] == null
    ? ""
    : window["enumLabel"][l_enumid + "_" + l_enumvalue];
}
var enumLabel = (window.enumLabel = {});
enumLabel.InvestorType_0 = "个人";
enumLabel.InvestorType_1 = "机构";
enumLabel.InvestorType_2 = "自营";
enumLabel.DocumentType_0 = "组织机构代码";
enumLabel.DocumentType_1 = "中国公民身份证";
enumLabel.DocumentType_2 = "军官证";
enumLabel.DocumentType_3 = "警官证";
enumLabel.DocumentType_4 = "士兵证";
enumLabel.DocumentType_5 = "户口簿";
enumLabel.DocumentType_6 = "护照";
enumLabel.DocumentType_7 = "台胞证";
enumLabel.DocumentType_8 = "回乡证";
enumLabel.DocumentType_9 = "营业执照号";
enumLabel.DocumentType_A = "税务登记号/当地纳税ID";
enumLabel.DocumentType_B = "港澳居民来往内地通行证";
enumLabel.DocumentType_C = "台湾居民来往大陆通行证";
enumLabel.DocumentType_D = "驾照";
enumLabel.DocumentType_F = "当地社保ID";
enumLabel.DocumentType_G = "当地身份证";
enumLabel.DocumentType_H = "商业登记证";
enumLabel.DocumentType_I = "港澳永久性居民身份证";
enumLabel.DocumentType_J = "人行开户许可证";
enumLabel.DocumentType_x = "其他证件";
enumLabel.TransactionStatus_0 = "启用";
enumLabel.TransactionStatus_1 = "禁用";
enumLabel.SettlementStatus_0 = "未确认";
enumLabel.SettlementStatus_1 = "已确认";
enumLabel.UserTypes_0 = "经纪公司用户";
enumLabel.UserTypes_1 = "超级用户";
enumLabel.UserTypes_2 = "投资者用户";
enumLabel.Encryption_0 = "明文";
enumLabel.Encryption_2 = "AES加密";
enumLabel.Encryption_3 = "SHA加密";
enumLabel.Encryption_4 = "MD5加密";
enumLabel.LoginStatus_0 = "启用";
enumLabel.LoginStatus_1 = "禁用";
enumLabel.LoginStatus_2 = "锁定";
enumLabel.Currency_1 = "人民币";
enumLabel.Currency_2 = "港币";
enumLabel.Currency_3 = "美元";
enumLabel.BankCode_1 = "中国建设银行";
enumLabel.BankCode_2 = "中国农业银行";
enumLabel.BankCode_3 = "中国工商银行";
enumLabel.BankCode_4 = "中国银行";
enumLabel.BankCode_5 = "中国招商银行";
enumLabel.BankCode_6 = "中国交通银行";
enumLabel.BankCode_7 = "浦东发展银行";
enumLabel.BankCode_8 = "兴业银行";
enumLabel.BankCode_9 = "中国光大银行";
enumLabel.BankCode_a = "广东发展银行";
enumLabel.ExchangeCode_0 = "通用内部使用";
enumLabel.ExchangeCode_1 = "上海黄金交易所";
enumLabel.ExchangeCode_2 = "上海期货交易所";
enumLabel.SpeculativeHedgingSigns_0 = "投机";
enumLabel.SpeculativeHedgingSigns_1 = "套利";
enumLabel.SpeculativeHedgingSigns_2 = "套保";
enumLabel.MarketCategory_0 = "现货";
enumLabel.MarketCategory_1 = "即期";
enumLabel.MarketCategory_2 = "延期";
enumLabel.MarketCategory_3 = "询价";
enumLabel.MarketCategory_4 = "期货";
enumLabel.TradingUnit_0 = "手";
enumLabel.TradingUnit_1 = "张";
enumLabel.TradingUnit_2 = "股";
enumLabel.TradingUnit_3 = "份";
enumLabel.TradingCurrencies_1 = "人民币";
enumLabel.TradingCurrencies_2 = "港币";
enumLabel.TradingCurrencies_3 = "美元";
enumLabel.BusinessCategory_0 = "买入开仓";
enumLabel.BusinessCategory_1 = "买入平仓";
enumLabel.BusinessCategory_2 = "卖出开仓";
enumLabel.BusinessCategory_3 = "卖出平仓";
enumLabel.BusinessCategory_4 = "交割交货申报";
enumLabel.BusinessCategory_5 = "交割收货申报";
enumLabel.BusinessCategory_6 = "中立仓交货申报";
enumLabel.BusinessCategory_7 = "中立仓收货申报";
enumLabel.HandlingChargeType_0 = "毛";
enumLabel.HandlingChargeType_1 = "净";
enumLabel.RangeModel_0 = "普通模式";
enumLabel.RangeModel_1 = "模板模式";
enumLabel.PositionDirection_0 = "净";
enumLabel.PositionDirection_1 = "多头";
enumLabel.PositionDirection_2 = "空头";
enumLabel.DeferredPaymentDirection_0 = "";
enumLabel.DeferredPaymentDirection_1 = "多付空";
enumLabel.DeferredPaymentDirection_2 = "空付多";
enumLabel.DeferredPaymentDirection_3 = "平";
enumLabel.ClientEncryption_0 = "明文";
enumLabel.ClientEncryption_1 = "软加密";
enumLabel.ClientEncryption_2 = "硬加密";
enumLabel.ConnectionStatus_0 = "未连接";
enumLabel.ConnectionStatus_1 = "正在分配";
enumLabel.ConnectionStatus_2 = "已连接";
enumLabel.UnitOfWeight_0 = "克";
enumLabel.UnitOfWeight_1 = "千克";
enumLabel.UnitOfWeight_2 = "盎司";