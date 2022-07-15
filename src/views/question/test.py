# -*- coding: UTF-8 -*-
from bs4 import BeautifulSoup
from utils import main

startStrBrand = '</i>'  # 起始字符串-获取品牌
endStrBrand = '</a>'  # 结束字符串-获取品牌
MaxDiscountFile = "C:\\Users\\Administrator\\Desktop\\245-200优惠券.txt"
OverlayFile = "C:\\Users\\Administrator\\Desktop\\200-30优惠券.txt"
resultBrand = main.handleData(startStrBrand, endStrBrand,
                              MaxDiscountFile, OverlayFile)
print('resultBrand', resultBrand)


with open('C:\\Users\\Administrator\\Desktop\\MaxDiscountFile.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

strhtm = soup.prettify()  # 标准格式转化
# Print the first few characters
print(strhtm[:255])
