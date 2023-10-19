package com.sachlevice.api;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.*;


import java.security.Key;
import java.security.SecureRandom;

import java.util.Base64;
import java.util.Date;

public class JwtUtils {
    private static final String SECRET_KEY = generateSecretKey();;

    public static String generateSecretKey() {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[32];
        random.nextBytes(bytes);

        return Base64.getEncoder().encodeToString(bytes);
    }
    public static String generateToken(String username, boolean admin) {
        Claims claims = Jwts.claims().setSubject(username);
        Key signingKey = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
        if(admin) {
            claims.put("role", "admin");
        }else {
            claims.put("role", "user");
        }
        String token = Jwts.builder()
                .setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hour
                .signWith(signingKey)
                .compact();
        return token;
    }
}
