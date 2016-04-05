package com.ejiangnan.modules;

import org.jsoup.parser.Parser;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;


import java.util.Map;

public class ParserModule extends ReactContextBaseJavaModule {

    public ParserModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HTMLParser";
    }

    @ReactMethod
    public void getName(String context, Promise promise) {
        try {
            Document document = Parser.parse(context, "http://e.jiangnan.edu.cn/ehome/index.do");
            Element nameEle = document.select(".personName a").first();
            String name = nameEle.html();
            promise.resolve(name);
        } catch(Exception e) {
            promise.reject(e.getMessage());
        }

    }
}

